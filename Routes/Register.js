import express  from "express";
import UserRegistery from "../Controllers/UserRegistery.js";
import OtpVerification from "../Controllers/OtpVerification.js";

const router = express.Router();

router.post("/Register", UserRegistery);
router.post('/OtpVerification', OtpVerification)


export {router as UserAuthenticate} 