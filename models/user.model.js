// email - string req
// pass - string req min=8 max=20
// name - string req min=4 max=15


const mongoose = require("mongoose")
const validator =require("validator")

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true],
        trim:true,
        validate:[validator.isEmail, "please enter a valid email address"],
        unique:[true,"email already exists"]
            
    },

    password:{
        type:String,
        required:[true,"password is required"],
        minLength: [8,"password should atleast have 8 characters"]
    },

    name:{
        type:String,
        required:[true,"name is required"],
        minLength:[4,"name should atleast have 4 characters"],
        maxLength:[15,"number of characters exceeded"],
    }
})

module.exports=mongoose.model("User",userSchema)