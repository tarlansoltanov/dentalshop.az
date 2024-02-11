import { DefaultFilter } from "./default";

export type ProductFilter = DefaultFilter & {
  name?: string;
  code?: string;
  brand?: string;
  category?: string;
  min_price?: number;
  max_price?: number;
  discount?: boolean;
  is_new?: boolean;
  in_stock?: boolean;
  is_distributer?: boolean;
  is_recommended?: boolean;
};
