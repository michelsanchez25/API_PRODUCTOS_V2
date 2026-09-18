import { Router } from "express";
import { CategoryRepository } from "../repositories/category.repository";
import { CategoryService } from "../services/category.service";
import { CategoryController } from "../controllers/category.controller";
import { validateId } from "../middlewares/validate-id.middleware";
import { validateCategory } from "../middlewares/validate-category.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";
import { asyncHandler } from "../utils/async-handler";

const router = Router();

const repository = new CategoryRepository();
const service = new CategoryService(repository);
const controller = new CategoryController(service);

router.get(
  "/",
  asyncHandler(controller.getAll)
);

router.get(
  "/:id",
  validateId,
  asyncHandler(controller.getById)
);

router.post(
  "/",
  authMiddleware,
  validateCategory,
  asyncHandler(controller.create)
);

router.put(
  "/:id",
  authMiddleware,
  validateId,
  validateCategory,
  asyncHandler(controller.update)
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  validateId,
  asyncHandler(controller.remove)
);

export default router;