export class AppError {
  // public readonly message: string;
  // public readonly statusCode: number;

  constructor(
    public readonly message: string,
    public readonly statusCode: number = 400
  ) {}
}
