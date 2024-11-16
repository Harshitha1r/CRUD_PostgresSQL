import pool from "../db.js";


export const getAllUsersService=async()=>{
    const result=await pool.query("SELECT * from users")
    console.log(result,"re")
    return result.rows;
}

export const createUserService=async(name,email)=>{
    const result=await pool.query("INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *",[name,email])
    return result.rows[0];

}

export const getUserByIdService=async(id)=>{
    const result=await pool.query("SELECT * FROM users WHERE id=$1",[id])
    return result.rows;
}

export const updateUserService=async(id,body)=>{
    const {name,email}=body
    const result=await pool.query("UPDATE users SET name=$1,email=$2 WHERE id=$3",[name,email,id])
    console.log(result)
    return result.rows[0]
}

export const deleteUserService=async(body)=>{
    const {name,email}=body
    const result=await pool.query("DELETE FROM users WHERE name=$1",[name])
    console.log(result)
    return result.rows[0]
}
