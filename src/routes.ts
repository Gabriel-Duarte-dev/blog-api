import { Router } from "express";
import { PrismaUsersRepository } from "./repositories/prisma/prisma-users-repository";
import { RegisterUserUseCase } from "./use-cases/register-user-use-case";

export const routes = Router();

routes.get("/", (req, res) => {
  return res.send("Hello World");
});

routes.post("/register", async (req, res) => {
  const { email, password, site } = req.body;

  const prismaUsersRepository = new PrismaUsersRepository();
  const registerUserUseCase = new RegisterUserUseCase(prismaUsersRepository);

  await registerUserUseCase.execute({
    email,
    password,
    site,
  });

  return res.status(201).send();
});
