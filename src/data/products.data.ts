import { Product } from "../models/product.model";

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop Lenovo",
    price: 2800000,
    category: "Computadores",
    stock: 10,
    active: true
  },
  {
    id: 2,
    name: "Mouse Logitech",
    price: 120000,
    category: "Accesorios",
    stock: 25,
    active: true
  },
  {
    id: 3,
    name: "Monitor LG",
    price: 950000,
    category: "Monitores",
    stock: 8,
    active: true
  }
];