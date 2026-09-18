import {
  Request,
  Response,
  NextFunction
} from "express";

export function validateStock(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const { stock } = req.body;

  if (stock === undefined) {

    res.status(400).json({
      message:
        "El stock es obligatorio"
    });

    return;
  }

  if (typeof stock !== "number") {

    res.status(400).json({
      message:
        "El stock debe ser numérico"
    });

    return;
  }

  if (!Number.isInteger(stock)) {

    res.status(400).json({
      message:
        "El stock debe ser un número entero"
    });

    return;
  }

  if (stock < 0) {

    res.status(400).json({
      message:
        "El stock no puede ser negativo"
    });

    return;
  }

  next();
}