import { DefaultFilter } from "./default";

export type ProductFilter = DefaultFilter & {
  name?: string | null;
  code?: string | null;
  brand?: string | null;
  category?: string | null;
  min_price?: number | null;
  max_price?: number | null;
  discount?: boolean | null;
  is_new?: boolean | null;
  in_stock?: boolean | null;
  only_stock?: boolean | null;
  is_distributer?: boolean | null;
  is_recommended?: boolean | null;
};
