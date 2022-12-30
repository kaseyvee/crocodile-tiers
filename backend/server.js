// load .env data into process.env
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import db from "./db/connection.js";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Web server config
import express from "express";
import morgan from "morgan";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

import { default as usersRoutes } from "./routes/usersRoutes.js";
app.use("/api/users", usersRoutes);

import { default as tierListsRoutes } from "./routes/tierListsRoutes.js";
app.use("/api/tier_lists", tierListsRoutes);

import { default as tierItemsRoutes } from "./routes/tierItemsRoutes.js";
app.use("/api/tier_items", tierItemsRoutes);

//Starting Feature
app.get("/", (req, res) => {
  res.send(
    "Option for pathway: /api/users  /api/tier_lists  /api/tier_items"
  );
});

//server connection
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
