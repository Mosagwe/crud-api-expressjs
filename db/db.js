import * as pg from 'pg';
const {Pool}=pg.default
import * as dotenv from 'dotenv'
dotenv.config()

const pool=new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,  
});

pool.connect(error =>{
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

export default pool;