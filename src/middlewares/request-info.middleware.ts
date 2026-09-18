import {
  Request,
  Response,
  NextFunction
} from "express";

export function requestInfoMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  console.log("------------------------");
  console.log("HTTP REQUEST");
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.originalUrl}`);
  console.log(
    `Date: ${new Date().toISOString()}`
  );

  console.log(
    `Content-Type: ${
      req.header("content-type") ??
      "No definido"
    }`
  );

  console.log(
    `User-Agent: ${
      req.header("user-agent") ??
      "No definido"
    }`
  );

  console.log("------------------------");

  next();
}