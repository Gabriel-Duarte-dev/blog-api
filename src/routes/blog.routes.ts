import { Router } from "express";
import { authorize } from "../middlewares/authorize";
import { CreateBlogController } from "../modules/blogs/controllers/CreateBlogController";
import { FindBySiteController } from "../modules/blogs/controllers/FindBySiteController";

const createBlogController = new CreateBlogController();
const findBySiteController = new FindBySiteController();

const blogRoutes = Router();

blogRoutes.post("/newPost", authorize, createBlogController.handle);
blogRoutes.get("/posts/:site", findBySiteController.handle);

export { blogRoutes };
