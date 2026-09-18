import {
  Request,
  Response,
  NextFunction
} from "express";

import {
  AppError
} from "../errors/app-error";

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {

  if (
    error instanceof AppError
  ) {

    res
      .status(error.statusCode)
      .json({
        message:
          error.message
      });

    return;
  }

  console.error(
    "ERROR NO CONTROLADO:",
    error
  );

  res.status(500).json({
    message:
      "Error interno del servidor"
  });
}