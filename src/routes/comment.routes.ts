import { Router } from "express";
import { CreateCommentController } from "../modules/comment/controllers/CreateCommentController";
import { ListByPostController } from "../modules/comment/controllers/ListByPostController";

const createCommentController = new CreateCommentController();
const listByPostController = new ListByPostController();

const commentRoutes = Router();

commentRoutes.post("/newComment", createCommentController.handle);
commentRoutes.get("/:blogId", listByPostController.handle);

export { commentRoutes };
