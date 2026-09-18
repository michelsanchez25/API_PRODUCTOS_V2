import {
  Request,
  Response,
  NextFunction
} from "express";

export function notFoundMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  res.status(404).json({
    message:
      "Ruta no encontrada",
    path:
      req.originalUrl
  });
}