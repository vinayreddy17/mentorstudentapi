import MentorModel from "../models/mentorModel.js";
import StudentModel from "../models/studentModel.js";




const createMentor= async(req,res)=>{
    try{
        const{name}=req.body;

        if(!name){
            return res.json({error:"name is required"})
        
        }

        const exist = await MentorModel.findOne({name});
        if(exist){
            return res.json({
                error:"Mentor already exists"
            })
        }

        const mentor = await MentorModel.create({
            name
        });
        return res.json(`${mentor.name} created as mentor successfully`)
       ;
    }catch(error){res.json(error)}
};

const getMentees = async (req, res) => {
    try {
        const { mentor } = req.params;
        console.log(mentor)
        const exist = await MentorModel.findOne({ name: mentor });
        if (exist) {
            return res.status(200).json({ mentees: exist.mentees });
        } else {
            return res.status(404).json({ error: 'Mentor not found' });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const getMentorsAndStudents = async (req, res) => {
    try {
        
        const mentors = await MentorModel.find({});
       
       
        const studentsWithNoMentor = await StudentModel.find({mentor: '' });
        
        
        const response = {
            mentors: mentors.map(mentor => mentor.name),
            studentsWithNoMentor: studentsWithNoMentor.map(student => student.name)
        };

        
        res.json(response);
    } catch (error) {
        console.error(error);
        res.json({ error: 'Internal server error' });
    }
};

const assignStudentsToMentor = async (req, res,next) => {
    try {
        const { mentor } = req.params;
        const { students } = req.body;

        
        const mentorDocument = await MentorModel.findOne({ name: mentor });
        if (!mentorDocument) {
            return res.status(404).json({ error: "Mentor not found" });
        }

        
        mentorDocument.mentees.push(...students);
        await mentorDocument.save();

        
        await StudentModel.updateMany(
            { name: { $in: students } },
            { $set: { mentor: mentor } }
        );
        
       
         next();
    } catch (error) {
        console.error("Error assigning students to mentor:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


export {createMentor,getMentees,getMentorsAndStudents,assignStudentsToMentor}