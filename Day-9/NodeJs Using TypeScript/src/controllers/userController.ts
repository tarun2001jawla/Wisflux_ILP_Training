import { Request, Response } from "express";
import { User } from "../../types/userType";
import fs from "fs";

// Load users from JSON file
const loadUsers = (): User[] => {
    try {
        const data = fs.readFileSync("users.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error loading users:", error);
        return [];
    }
};

// Save users to JSON file
const saveUsers = (users: User[]): void => {
    try {
        fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
    } catch (error) {
        console.error("Error saving users:", error);
    }
};

// Controller functions
export const getAllUsers = (req: Request, res: Response): void => {
    const users = loadUsers();
    res.status(200).json(users);
};
// Controller function to delete a user by email
export const deleteUserByEmail = (req: Request, res: Response): void => {
    const email: string = req.params.email;
    let users = loadUsers();
    const initialLength = users.length;
    
    // Filter out the user with the specified email
    users = users.filter((user) => user.email !== email);

    // Check if any user was deleted
    if (users.length === initialLength) {
        res.status(404).json({ message: "User not found" });
        return;
    }

    // Save the updated user list to the JSON file
    saveUsers(users);
    
    res.status(200).json({ message: "User deleted successfully" });
};

// Controller function to get a user by email
export const getUserByEmail = (req: Request, res: Response): void => {
    const email: string = req.params.email;
    const users = loadUsers();
    const user = users.find((user) => user.email === email);
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.status(200).json(user);
};

export const createUser = (req: Request, res: Response): void => {
    const { name, age, email, gender }: User = req.body;
    if (!name || !age || !email || !gender) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }

    const existingUsers = loadUsers();
    const existingUser = existingUsers.find((user) => user.email === email);
    if (existingUser) {
        res.status(400).json({ message: "User with this email already exists" });
        return;
    }

    const newUser: User = { name, age, email, gender };
    existingUsers.push(newUser);
    saveUsers(existingUsers);
    res.status(201).json(newUser);
};
