import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { blogRoutes } from "./blog.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/auth", authenticateRoutes);
routes.use("/blog", blogRoutes);

export { routes };
