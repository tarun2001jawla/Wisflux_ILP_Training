// src/routes/userRoutes.ts

import express, { Router } from "express";
import { getAllUsers, createUser,getUserByEmail,deleteUserByEmail } from "../controllers/userController";

const router: Router = express.Router();

// Define routes
router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:email", getUserByEmail); // Route to get user by email
router.delete("/:email", deleteUserByEmail); // Route to delete user by email

export default router;
