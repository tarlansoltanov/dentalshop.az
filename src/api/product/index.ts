import axios from "@/api";

// Helpers
import { getURLWithFilterParams } from "@/helpers";

// Types
import { Product } from "@/types";
import { ProductFilter } from "@/types/filters";

// URLs
import * as URL from "./urls";

export const getProducts = async (
  filters: ProductFilter
): Promise<{ data: Product[]; count: number }> => {
  const { data } = await axios.get(getURLWithFilterParams(URL.PRODUCT_LIST_URL, filters));
  return { data: data.results, count: data.count };
};

export const getProduct = async (slug: string): Promise<Product> => {
  const { data } = await axios.get(URL.PRODUCT_DETAIL_URL(slug));
  return data;
};
