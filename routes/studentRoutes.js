import { Router } from "express";

import { createStudent,assignMentor,getPrevious } from "../controllers/studentController.js";

const student = Router();

student.get("/previous/:student", getPrevious
);



student.post("/createStudent", createStudent);

student.put("/assignmentor",assignMentor );



export default student;
