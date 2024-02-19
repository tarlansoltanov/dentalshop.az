import { Product } from "./product";

export type Order = {
  id: number;
  products: OrderItem[];
  discount: number;
  status: string;
  payment_type: string;
  address: string;
  date: string;
};

export type OrderItem = {
  product: Product;
  quantity: number;
  price: number;
  discount: number;
};
