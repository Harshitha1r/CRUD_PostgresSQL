import pkg from 'pg';
import dotenv from 'dotenv'

dotenv.config()
const {Pool}=pkg

const pool=new Pool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE
})

pool.on("connect",()=>{
    console.log("connected successfully to postgres")
})


export default pool;
