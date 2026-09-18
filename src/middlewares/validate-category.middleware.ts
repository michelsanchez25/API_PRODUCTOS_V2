import {
  Request,
  Response,
  NextFunction
} from "express";

export function validateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const { category } = req.params;

  if (!category || typeof category !== "string") {

    res.status(400).json({
      message:
        "La categoría es obligatoria"
    });

    return;
  }

  if (category.trim().length < 3) {

    res.status(400).json({
      message:
        "La categoría debe tener mínimo 3 caracteres"
    });

    return;
  }

  next();
}