import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import express from "express";
import database from "./database.js";

database.connect();

let server;

server = express();
