import dotenv from "dotenv";
import express from "express";
import database from "./database.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import hbs from "hbs";
import {
    loginRoute, 
    signupRoute
} from "./routes/index.js";

dotenv.config({ path: ".env.local" });

database.connect();

let server;
let port;
let publicDirectory;
let __filename;
let __dirname;


server = express();

port = process.env.PORT;

server.use(express.json());


// Define __dirname in ES module scope
__filename = fileURLToPath(import.meta.url);
__dirname = path.dirname(__filename);

// Set public static directory
publicDirectory = path.join(__dirname, "public");

hbs.registerPartials(path.join(__dirname, "/views", "/partials"));

server.set("views", path.join(__dirname, "/views/pages"))

// Define templating engine
server.set("view engine", "hbs");

// Initialize public directory
server.use(express.static(publicDirectory));

server.get("/", (request, response) => {
    response.render("index")
})

server.use("/signup", signupRoute)
server.use("/login", loginRoute);

server.listen(port, () => {
    console.log(`Login System is listening to port ${ port }`);
});