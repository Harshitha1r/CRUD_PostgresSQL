import express from 'express';
import cors from "cors";
import pool from './config/db.js';
import dotenv from "dotenv";
import userRoutes from "./config/routes/userRoutes.js";
import { errorHnadling } from './config/middlewares/errorHandle.js';
import { createUserTable } from './config/data/craeteuserTabale.js';

const app=express();
dotenv.config();

const port=process.env.PORT || 3000

console.log(process.env.PORT)

//middlewares
app.use(express.json())
app.use(cors());

app.use('/api',userRoutes)

app.use(errorHnadling)

createUserTable();

app.get('/',async(req,res)=>{
    const result=await pool.query('SELECT current_database()');
    res.send(`The DB name is ${result.rows[0].current_database}`)
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})

