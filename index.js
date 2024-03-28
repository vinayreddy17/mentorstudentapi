import  express  from "express";
import 'dotenv/config';
import mentor from "./routes/mentorRoutes.js";
import student from "./routes/studentRoutes.js";
import cors from 'cors';
import mongoose from "mongoose";

const app=express();
app.use(cors());

mongoose.connect(process.env.MONGO)
.then(()=>console.log('database connected'))
.catch((err)=>console.log(err));

app.use(express.json());



app.use('/mentor',mentor)
 app.use('/student',student)
const PORt=5000;

app.listen(PORt,()=>console.log('Server is running on port',PORt));
