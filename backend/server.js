import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import express from "express";

import userRoutes from "./routes/userRoutes.js"
import tierListsRoutes from "./routes/tierListsRoutes.js"
import tierItemsRoutes from "./routes/tierItemsRoutes.js"

const app = express();

//middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/users", userRoutes);
app.use("/api/tier_items", tierItemsRoutes);
app.use("/api/tier_lists", tierListsRoutes);

//Starting Feature
app.get("/", (req, res) => {
  res.send(
    "Option for pathway: /api/users  /api/tier_items  /api/tier_lists"
  );
});

//server connection
app.listen(process.env.PORT || 8080, () => {
  console.log(
    "Succefully Starting Server : listening on port " + process.env.PORT
  );
});
