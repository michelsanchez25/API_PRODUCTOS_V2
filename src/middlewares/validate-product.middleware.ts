import {
  Request,
  Response,
  NextFunction
} from "express";

export function validateProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const {
    name,
    price,
    category,
    active
  } = req.body;

  if (
    typeof name !== "string" ||
    name.trim().length === 0
  ) {

    res.status(400).json({
      message:
        "El nombre es obligatorio"
    });

    return;
  }

  if (price === undefined) {

    res.status(400).json({
      message:
        "El precio es obligatorio"
    });

    return;
  }

  if (typeof price !== "number") {

    res.status(400).json({
      message:
        "El precio debe ser numérico"
    });

    return;
  }

  if (price <= 0) {

    res.status(400).json({
      message:
        "El precio debe ser mayor que cero"
    });

    return;
  }

  if (
    typeof category !== "string" ||
    category.trim().length === 0
  ) {

    res.status(400).json({
      message:
        "La categoría es obligatoria"
    });

    return;
  }

  if (
    active !== undefined &&
    typeof active !== "boolean"
  ) {

    res.status(400).json({
      message:
        "active debe ser booleano"
    });

    return;
  }

  next();
}