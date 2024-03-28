import mongoose from 'mongoose';

const {Schema}= mongoose;

const mentorSchema=new Schema(
    {
        name:{type:String,
             required:true,
             unique: true
            },
        mentees: { type: Array, default: [] } 

    }
);

const MentorModel = mongoose.model('Mentor',mentorSchema);

export default MentorModel;