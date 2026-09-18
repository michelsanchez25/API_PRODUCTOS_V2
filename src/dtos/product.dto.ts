export interface CreateProductDto {
  name: string;
  price: number;
  category: string;
  stock: number;
  active: boolean;
}

export interface UpdateProductDto {
  name: string;
  price: number;
  category: string;
  stock: number;
  active: boolean;
}