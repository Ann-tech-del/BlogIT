import { Request, Response } from "express";
import { client } from "../config/prismaConfig";



async function createBlogs (req: Request, res: Response){
try{
const { title ,synopsis , content , featuredImage}= req.body
const {id} = req.user
 const newBlog = await client.blog.create({
  data: {
    title,
    synopsis,
    content,
    featuredImage,
    authorId: id
  }
});
res.status(200).json(newBlog)
}
catch(e){
  res.status(500).json({message:"Something went wrong"})
}


}
export {createBlogs}