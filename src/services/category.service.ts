import { CategoryRepository } from "../repositories/category.repository";
import { CreateCategoryDto, UpdateCategoryDto } from "../dtos/category.dto";
import { AppError } from "../errors/app-error";

export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async getAll() {
    return await this.categoryRepository.findAll();
  }

  async getById(id: number) {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError(404, "Categoría no encontrada");
    }

    return category;
  }

  async create(data: CreateCategoryDto) {
    const existing = await this.categoryRepository.findByName(data.name);

    if (existing) {
      throw new AppError(409, "Ya existe una categoría con ese nombre");
    }

    return await this.categoryRepository.create(data);
  }

  async update(id: number, data: UpdateCategoryDto) {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError(404, "Categoría no encontrada");
    }

    if (data.name) {
      const existing = await this.categoryRepository.findByName(data.name);

      if (existing && existing.id !== id) {
        throw new AppError(409, "Ya existe otra categoría con ese nombre");
      }
    }

    return await this.categoryRepository.update(id, data);
  }

  async delete(id: number) {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError(404, "Categoría no encontrada");
    }

    await this.categoryRepository.delete(id);
  }
}