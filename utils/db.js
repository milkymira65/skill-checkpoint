// import * as pg from "pg";

// const { Pool } = pg.default;

// const pool = new Pool({
//   connectionString: "techupth://postgres:mira1903@localhost:5432/milk",
// });

import dotenv from "dotenv";
dotenv.config()
import * as pg from "pg"; 
const { Pool } = pg.default; 
const pool = new Pool({ user: "postgres", localhost: "techupth", database: "skill checkpoint2", password: 
`${process.env.PG_PASSWORD}`, port: 5432, }); 


export { pool };