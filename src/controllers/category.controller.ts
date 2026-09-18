import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  getAll = async (req: Request, res: Response) => {
    const categories = await this.categoryService.getAll();
    res.json(categories);
  };

  getById = async (req: Request, res: Response) => {
    const idParam = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;
    const id = parseInt(idParam, 10);
    const category = await this.categoryService.getById(id);
    res.json(category);
  };

  create = async (req: Request, res: Response) => {
    const category = await this.categoryService.create(req.body);
    res.status(201).json(category);
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const category = await this.categoryService.update(id, req.body);
    res.status(200).json(category);
  };

  remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.categoryService.delete(id);
    res.status(204).send();
  };
}