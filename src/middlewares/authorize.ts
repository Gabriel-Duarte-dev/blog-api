import authConfig from "../config/auth";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/users/repositories/prisma/UsersRepository";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export async function authorize(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError("Token is missing");

  const [, token] = authHeader.split(" ");

  try {
    const decoded =
      authConfig.jwt.secret && verify(token, authConfig.jwt.secret);

    const { sub: user_id } = decoded as ITokenPayload;

    const prismaUserRepository = new UsersRepository();

    const user = prismaUserRepository.findById(user_id);

    if (!user) throw new AppError("User does not exists");

    req.user = {
      id: user_id,
    };
    return next();
  } catch {
    throw new AppError("Invalid token");
  }
}
