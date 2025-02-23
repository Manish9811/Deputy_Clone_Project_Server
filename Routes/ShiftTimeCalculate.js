import express from "express";
import TimeController from "../Controllers/TimeController.js";

const router = express.Router();


router.post("/UserTime", TimeController)


export {router as UserTimeController}