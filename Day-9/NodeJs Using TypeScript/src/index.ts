import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fs from "fs";

const users = require("./json_data.json")






dotenv.config();


const app :Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended:false}));
//Routes

app.get('/api/users',(req:Request,res:Response)=>{
    res.status(200).json(users);
})


app.post('/api/users',(req:Request,res:Response)=>{
      const body = req.body;
      const id = users.length+1;
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

