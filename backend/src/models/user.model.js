const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        
    },
    email:{
        type: String,
        required: [true,"email is required"],
        unique:true,
       
        lower:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
     
    }
},{timestamps:true})

const model = mongoose.model("user",Schema);
module.exports= model
