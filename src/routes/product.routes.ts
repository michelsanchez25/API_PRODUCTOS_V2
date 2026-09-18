import {
  Router
} from "express";

import {
  ProductRepository
} from "../repositories/product.repository";

import {
  ProductService
} from "../services/product.service";

import {
  ProductController
} from "../controllers/product.controller";

import {
  validateId
} from "../middlewares/validate-id.middleware";

import {
  validateProduct
} from "../middlewares/validate-product.middleware";

import {
  validateStock
} from "../middlewares/validate-stock.middleware";

import {
  validateCategory
} from "../middlewares/validate-category.middleware";

import {
  authMiddleware
} from "../middlewares/auth.middleware";

import {
  adminMiddleware
} from "../middlewares/admin.middleware";

import {
  asyncHandler
} from "../utils/async-handler";

const router = Router();

const repository =
  new ProductRepository();

const service =
  new ProductService(repository);

const controller =
  new ProductController(service);

router.get(
  "/",
  asyncHandler(
    controller.getAll
  )
);

router.get(
  "/category/:category",
  validateCategory,
  asyncHandler(
    controller.getByCategory
  )
);

router.get(
  "/:id",
  validateId,
  asyncHandler(
    controller.getById
  )
);

router.post(
  "/",
  authMiddleware,
  validateProduct,
  validateStock,
  asyncHandler(
    controller.create
  )
);

router.put(
  "/:id",
  authMiddleware,
  validateId,
  validateProduct,
  validateStock,
  asyncHandler(
    controller.update
  )
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  validateId,
  asyncHandler(
    controller.remove
  )
);

export default router;