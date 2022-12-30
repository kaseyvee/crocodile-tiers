// Database connections
import * as pg from "pg";
const { Pool } = pg.default;

const {DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT} = process.env;

export const pool = new Pool({
	user: DB_USER,
	host: DB_HOST,
	password: DB_PASS,
	port: DB_PORT,
	database: DB_NAME,
})

pool.connect().then(() => {
	console.log("Database connection established.")
}).catch( e => {
	throw new Error(e);
})

const db = new Pool(pool);

export default db;