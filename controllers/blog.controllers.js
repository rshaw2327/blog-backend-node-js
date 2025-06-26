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

exports.getAllBlogs=async(req,res,next)=> {
    const blogs = await Blogs.find()
    if(!blogs){
    return res.status(404).json({
        success:false,
        message:"cannot find blogs"
    })
}
return res.status(200).json({
    success:true,
    message:"products fetched successfully",
    blogs
})}

exports.getASingleBlog=async(req,res,next)=>{
    const id=req.params.id
    const blogs = await Blogs.findById(id)
    if(!blogs){
        return res.status(404).json({
            success:false,
            message:"cannot find the blog"
        })

    }
    return res.status(200).json({
        success:true,
        message:"blog fetched successfully",
        blogs
    })
}

exports.updateABlog=async(req,res,next)=>{
    const id=req.params.id
    const updatedData=req.body
    let blogs = await Blogs.findById(id)
    if(!blogs){
        return res.status(404).json({
            success:false,
            message:"cannot find the blog while updating "
        })

    }
    blogs = await Blogs.findByIdAndUpdate(id,updatedData,{
        new:true,
        runValidators:true
    })
    return res.status(201).json({
        success:true,
        message:"blog updated successfully",
        blogs
    })

}

exports.deleteBlog= async(req,res,next)=>{
    

}