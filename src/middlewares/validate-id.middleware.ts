import {
  Request,
  Response,
  NextFunction
} from "express";

export function validateId(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const id =
    Number(req.params.id);

  if (Number.isNaN(id)) {

    res.status(400).json({
      message:
        "El ID debe ser numérico"
    });

    return;
  }

  if (!Number.isInteger(id)) {

    res.status(400).json({
      message:
        "El ID debe ser un número entero"
    });

    return;
  }

  if (id <= 0) {

    res.status(400).json({
      message:
        "El ID debe ser mayor que cero"
    });

    return;
  }

  next();
}