// -- /server/db/scripts/resetdb.js
// reset your database
import dotenv from 'dotenv';
dotenv.config();
import * as pg from "pg";
const { Client } = pg.default;
const SCHEMA_PATH = './db/schema';
const SEEDS_PATH = './db/seeds';

const {DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT} = process.env;
import fs from "fs";

const connObj = {
	user: DB_USER,
	host: DB_HOST,
	password: DB_PASS,
	port: DB_PORT,
	database: DB_NAME,
}

export const runMigrations = async db => {

	const migrations = await fs.readdir(SCHEMA_PATH);
	for (migration of migrations) {
		const sql = await fs.readFile(`${SCHEMA_PATH}/${migration}`, 'utf8');
		console.log(`\t Running ${migration}`);
		await db.query(sql);
	}
}

export const runSeeds = async db => {
	const seeds = await fs.readdir(SEEDS_PATH);
	for (seed of seeds) {
		const sql = await fs.readFile(`${SEEDS_PATH}/${seed}`, 'utf8');
		console.log(`\t Running ${seed}`);
		await db.query(sql);
	}
}

export const resetDB = async () => {
	try {
		console.log("Running DB Reset...");
		console.log("Establishing DB connection: ");
		const client = new Client(connObj);
		await client.connect();
		console.log("connection established!\n");

		console.log("-- Running Migrations --\n");
		await runMigrations(client);
		console.log('\n');
		console.log("-- Running Seeds --\n");
		await runSeeds(client);
		console.log('\n');
		console.log("-- COMPLETED --");
		client.end();
	} catch (e) {
		console.log("ERROR OCCURED:\n", e);
	}
}

resetDB();