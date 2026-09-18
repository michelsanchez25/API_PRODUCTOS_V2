import {
  Request,
  Response,
  NextFunction
} from "express";

export function adminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const role =
    req.header("x-role");

  if (!role) {

    res.status(401).json({
      message:
        "Debe enviar el rol del usuario"
    });

    return;
  }

  if (role !== "admin") {

    res.status(403).json({
      message:
        "Se requiere rol admin"
    });

    return;
  }

  next();
}