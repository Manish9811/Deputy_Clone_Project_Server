// server.js
import express from 'express';
import cors from 'cors';
import { UserAuthenticate } from './Routes/Register.js';
import dotenv from 'dotenv';
import { UserTimeController } from './Routes/ShiftTimeCalculate.js';
import cookieParser from 'cookie-parser';
import { AuthenticationCheck } from './Routes/Authentication.js';

const app = express();
app.use(cookieParser())
dotenv.config();
const port = process.env.PORT || 5002

// Enable CORS
app.use(cors({
  // origin: [`https://deputy-clone-frontend-git-main-manish9811s-projects.vercel.app`,'http://localhost:3000'],
  origin : "http://localhost:3000",
  credentials: true
}));

// Middleware to handle JSON request body
app.use(express.json());

// Set up routes
app.get('/', (req, res) => {
  return res.json({ Message: "Server running" });
});

app.use('/api', UserAuthenticate);
app.use('/api',UserTimeController)
app.use('/api/auth',AuthenticationCheck)

// Export the handler as a serverless function
app.listen((port),()=>{
  console.log(new Date().toLocaleString())
  console.log("app is runnin", port) 
  
})