import { Router } from "express";
import { createBlogs } from "../controller/blogs.controller";
import verifyUser from "../middleware/verifyUser";

const blogRouter = Router()
blogRouter.post("/blog",verifyUser,createBlogs)

 
export default blogRouter;