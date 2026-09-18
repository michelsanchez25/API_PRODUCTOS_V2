import { products } from "../data/products.data";
import { Product } from "../models/product.model";
import {
  CreateProductDto,
  UpdateProductDto
} from "../dtos/product.dto";


export class ProductRepository {

    findAll(): Product[] {
        return products;
    }


    findById(id: number): Product | undefined {
        return products.find(product => product.id === id);
    }

    findByCategory(category: string): Product[] {
        return products.filter(product => product.category === category);
    }

    findByName(name: string): Product[] {
        return products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    }

    create(productDto: CreateProductDto): Product {
        const newProduct: Product = {
            id: products.length + 1,
            ...productDto
        };
        products.push(newProduct);
        return newProduct;
    }

    update(id: number, productDto: UpdateProductDto): Product | undefined {
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            products[index] = { ...products[index], ...productDto };
            return products[index];
        }
        return undefined;
    }

    delete(id: number): boolean {
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            products.splice(index, 1);
            return true;
        }
        return false;
    }

}