import {
  Request,
  Response,
  NextFunction
} from "express";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const apiKey =
    req.header("x-api-key");

  if (!apiKey) {

    res.status(401).json({
      message:
        "API Key requerida"
    });

    return;
  }

  if (
    apiKey !==
    process.env.API_KEY
  ) {

    res.status(403).json({
      message:
        "API Key inválida"
    });

    return;
  }

  next();
}