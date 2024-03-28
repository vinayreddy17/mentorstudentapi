import mongoose from 'mongoose';

const {Schema}= mongoose;

const studentSchema=new Schema(
    {
        name:{type:String,
            required:true
        },
        mentor:{type:String,
      default:''},
      previous: { type: String, default: '' } 

    }
);

const StudentModel = mongoose.model('Student',studentSchema);

export default StudentModel;