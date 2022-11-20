import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

class Database {
    constructor() {
        this.mysql = mysql.createConnection({
            host: process.env.MYSQL_DATABASE_HOST,
            user: process.env.MYSQL_DATABASE_USER,
            password: process.env.MYSQL_DATABASE_PASSWORD,
            database: process.env.MYSQL_DATABASE_NAME,
            port: process.env.MYSQL_DATABASE_PORT
        });
    }

    async connect() {
        return this.mysql.connect(error => {
            if (error) {
                console.log("Error encountered while attempting to connect to MySQL database", error);
            
            } else {
                console.log("Successfully connected to MySQL database");

            }
        })
    }
}

const database = new Database();
console.log( process.env.MYSQL_DATABASE_HOST, "database.js")

export default database;