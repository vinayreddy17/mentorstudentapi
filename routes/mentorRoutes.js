import { Router } from "express";
import { createMentor,getMentees,getMentorsAndStudents,assignStudentsToMentor } from "../controllers/mentorControllers.js";

const mentor = Router();

mentor.get("/getmentor/:mentor", getMentees);

mentor.get("/getstats", getMentorsAndStudents);

mentor.post("/createMentor", createMentor);

mentor.post("/:mentor/assign",assignStudentsToMentor,getMentorsAndStudents );



export default mentor;
