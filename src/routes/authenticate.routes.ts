import { Router } from "express";
import { AuthenticateUserController } from "../modules/users/controllers/AuthenticateUserController";

const authenticateUserController = new AuthenticateUserController();

const authenticateRoutes = Router();

authenticateRoutes.post("/login", authenticateUserController.handle);

export { authenticateRoutes };
