import { Category } from "../models/category.model";
import { categories } from "../data/categories.data";
import { CreateCategoryDto, UpdateCategoryDto } from "../dtos/category.dto";

export class CategoryRepository {
  private categoriesList: Category[] = categories;

  async findAll(): Promise<Category[]> {
    return this.categoriesList;
  }

  async findById(id: number): Promise<Category | undefined> {
    return this.categoriesList.find((category) => category.id === id);
  }

  async findByName(name: string): Promise<Category | undefined> {
    return this.categoriesList.find(
      (category) => category.name.toLowerCase() === name.toLowerCase()
    );
  }

  async create(data: CreateCategoryDto): Promise<Category> {
    const newCategory: Category = {
      id: this.categoriesList.length > 0 
        ? Math.max(...this.categoriesList.map((c) => c.id)) + 1 
        : 1,
      name: data.name,
      active: data.active ?? true,
    };

    this.categoriesList.push(newCategory);
    return newCategory;
  }

  async update(id: number, data: UpdateCategoryDto): Promise<Category | undefined> {
    const index = this.categoriesList.findIndex((cat) => cat.id === id);

    if (index === -1) return undefined;

    this.categoriesList[index] = {
      ...this.categoriesList[index],
      ...data,
    };

    return this.categoriesList[index];
  }

  async delete(id: number): Promise<boolean> {
    const index = this.categoriesList.findIndex((cat) => cat.id === id);

    if (index === -1) return false;

    this.categoriesList.splice(index, 1);
    return true;
  }
}