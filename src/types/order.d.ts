import { Product } from "./product";

export type Order = {
  id: number;
  items: OrderItem[];
  discount: number;
  payment_method: number;
  address: string;
  note: string;
  status: number;
  date: string;
};

export type OrderItem = {
  product: Product;
  quantity: number;
  price: number;
  discount: number;
};
