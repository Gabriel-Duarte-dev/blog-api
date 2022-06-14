import { Router } from "express";
import { authorize } from "../middlewares/authorize";
import { CreateBlogController } from "../modules/blogs/controllers/CreateBlogController";
import { FindByUserController } from "../modules/blogs/controllers/FindByUserController";

const createBlogController = new CreateBlogController();
const findByUserController = new FindByUserController();

const blogRoutes = Router();

blogRoutes.post("/newPost", authorize, createBlogController.handle);
blogRoutes.get("/posts", authorize, findByUserController.handle);

export { blogRoutes };
