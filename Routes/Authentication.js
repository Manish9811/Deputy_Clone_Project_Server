import express  from "express";
import AuthCheck from "../Middleware/AuthCheck.js";

const router = express.Router();

router.get("/AuthCheck", AuthCheck);


export {router as AuthenticationCheck} 