import StudentModel from "../models/studentModel.js";
import MentorModel from "../models/mentorModel.js";




const createStudent= async(req,res)=>{
    try{
        const{name}=req.body;

        if(!name){
            return res.json({error:"name is required"})
        
        }

        const exist = await StudentModel.findOne({name});
        if(exist){
            return res.json({
                error:"Student already exists"
            })
        }

        const student = await StudentModel.create({
            name
        });
        return res.json(`${student.name} created as student successfully`)
       ;
    }catch(error){res.json(error)}
};

const assignMentor = async(req,res) =>{

    const {student,mentor} = req.body;

    const ismentor=await MentorModel.findOne({name:mentor});

    if(ismentor)
    { const existingStudent = await StudentModel.findOne({ name: student });
    if (!existingStudent) {
        return res.json({ error: 'Student not found' });
    }
        const updatedStudent=await StudentModel.findOneAndUpdate(
        { name: student },
        { $set: { mentor: mentor, previous: existingStudent.mentor } },
        { new: true }
    )
    const menteeObject = {
        name: updatedStudent.name,
        id: updatedStudent._id
    };
    await MentorModel.findOneAndUpdate(
        { name: mentor },
        { $push: { mentees: menteeObject } }
    );
    res.json('mentor updated')
    }
    else{
        res.json('mentor not found')
    }

};
const getPrevious=async(req,res)=>
{
    try {
        const { student } = req.params;
        
        const exist = await StudentModel.findOne({ name: student });
        if (exist) {
            return res.status(200).json({ previousMentor: exist.previous });
        } else {
            return res.status(404).json({ error: 'student not found' });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ error: 'Internal server error' });
    }



}


export {createStudent,assignMentor,getPrevious}