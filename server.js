import express from "express";
import dotenv from "dotenv";

let server;

dotenv.config({ path: ".env.local" });

server = express();