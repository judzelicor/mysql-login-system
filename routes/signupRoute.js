import express from "express";
import {
    renderSignupPage,
    registerUser
} from "../controllers/index.js";

let router;

router = express.Router();

router.get("/", renderSignupPage);
router.post("/", registerUser);

export default router;