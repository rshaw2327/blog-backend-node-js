//  title - string req , min=5 ,max=15
// subheading - string req, min=8,max=12
// main content - string req, min= 200, max=2000
// author - mongodb ID req 
// tags - array of strings- min=2 max=10


const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
    type:String,
    required:[true,"Blog title required"],
    trim:true,
},
 
    subheading:{
        type:String,
        required:[true,"Blog subheading required"],
        trim:true,
},
    mainContent:{
        type:String,
        required:[true,"main content required"],
        minLength:[200,"minimum 200 characters required"],
        maxLength:[2000,"characters length exceded"],
},  
    // author:{
    //     type:mongoose.Schema.ObjectId,
    //     ref:"User",
    //     require:[true,"you are not authorized to create a blog please login first"],

// },  
    tags:[
        {
            type:String,
            minLength:2,
            maxLength:10,
        }
    ]


})

module.exports= mongoose.model("Blog",blogSchema)