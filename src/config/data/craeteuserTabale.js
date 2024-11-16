import pool from "../db.js";

export const createUserTable=()=>{
    const querytext=`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)`;
    try {
        pool.query(querytext);
        console.log("table does not exists so creating it")
    }
    catch(err){
        console.log(err,"Error while creating")
    }
}