import { Request, Response } from "express";

import { ProductService } from "../services/product.service";

export class ProductController {
  constructor(private readonly productService: ProductService) {}

  getAll = async (req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.json(products);
  };

  getById = async (req: Request, res: Response) => {
    const idParam = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;
    const id = parseInt(idParam, 10);
    const product = await this.productService.getById(id);
    res.json(product);
  };

  getByCategory = async (req: Request, res: Response) => {
    const category = Array.isArray(req.params.category)
      ? req.params.category[0]
      : req.params.category;

    const products = await this.productService.getByCategory(category);

    res.status(200).json(products);
  };

  create = async (req: Request, res: Response) => {
    const product = await this.productService.create(req.body);

    res.status(201).json(product);
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const product = await this.productService.update(id, req.body);

    res.status(200).json(product);
  };

  remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    await this.productService.delete(id);

    res.status(204).send();
  };
}
