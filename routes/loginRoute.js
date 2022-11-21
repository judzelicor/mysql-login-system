import express from "express";
import {
    renderLoginPage
} from "../controllers/index.js";

let router;

router = express.Router();

router.get("/", renderLoginPage);

export default router;