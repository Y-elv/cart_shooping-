import mongoose from "mongoose";

const photoSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   image:{
        data:Buffer,
        contentType: String
    }
})

export default mongoose.model('photo',photoSchema)