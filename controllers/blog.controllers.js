// create a blog 
// get all blogs
// get single blog
// update blog
// delete blog
// get all blogs by a user


const Blogs = require("../models/blog.model")

exports.createBlog=async(req,res,next)=>{
    const blog = await Blogs.create(req.body)
    if(!blog){
        return res.status(500).json({
            success:false,
            message:"cannot create a product"
        })
    }
    return res.status(201).json({
        success:true,
        message:"blog created successfully",
        blog
    })
}
