import { Router } from "express";
import { CreateUserController } from "../modules/users/controllers/CreateUserController";

const createUserController = new CreateUserController();

const userRoutes = Router();

userRoutes.post("/register", createUserController.handle);

export { userRoutes };
