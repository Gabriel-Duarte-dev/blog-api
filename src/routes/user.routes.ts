import { Router } from "express";
import { authorize } from "../middlewares/authorize";
import { CreateUserController } from "../modules/users/controllers/CreateUserController";
import { ListUserController } from "../modules/users/controllers/ListUserController";

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

const userRoutes = Router();

userRoutes.post("/register", createUserController.handle);
userRoutes.get("/", authorize, listUserController.handle);

export { userRoutes };
