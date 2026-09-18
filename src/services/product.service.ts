import { ProductRepository } from "../repositories/product.repository";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { AppError } from "../errors/app-error";

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAll() {
    return this.productRepository.findAll();
  }

  async getById(id: number) {
    const product = this.productRepository.findById(id);

    if (!product) {
      throw new AppError(404, "Product not found");
    }

    return product;
  }

  async getByCategory(category: string) {
    const products = this.productRepository.findByCategory(category);

    if (products.length === 0) {
      throw new AppError(404, "No products found in this category");
    }

    return products;
  }

  async create(data: CreateProductDto) {
    const existing = this.productRepository.findByName(data.name);

    if (existing) {
      throw new AppError(409, "Ya existe un producto con ese nombre");
    }

    return this.productRepository.create(data);
  }
  async update(id: number, data: UpdateProductDto) {
    const product = this.productRepository.findById(id);

    if (!product) {
      throw new AppError(404, "Producto no encontrado");
    }

    const existing = this.productRepository.findByName(data.name);

    if (existing.some((candidate) => candidate.id !== id)) {
      throw new AppError(409, "Ya existe otro producto con ese nombre");
    }

    return this.productRepository.update(id, data);
  }

  async delete(id: number) {
    const product = this.productRepository.findById(id);

    if (!product) {
      throw new AppError(404, "Producto no encontrado");
    }

    this.productRepository.delete(id);
  }
}
