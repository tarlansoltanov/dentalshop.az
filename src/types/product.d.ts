import { Brand, Category } from ".";

export type Product = {
  slug: string;
  name: string;
  code: string;
  brand: Brand;
  category: Category;
  images: ProductImage[];
  price: string;
  discount: number;
  is_new: boolean;
  in_stock: boolean;
  is_distributer: boolean;
  is_recommended: boolean;
  notes: ProductNote[];
  main_note: string;
  description: string;
  updated_at: string;
  created_at: string;
};

export type ProductImage = {
  id: number;
  image: string;
};

export type ProductNote = {
  id: number;
  text: string;
};
