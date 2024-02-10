import axios from "@/api";

// Helpers
import { getURLWithFilterParams } from "@/helpers";

// Types
import { Brand } from "@/types";
import { BrandFilter } from "@/types/filters";

// URLs
import * as URL from "./urls";

export const getBrands = async (filters: BrandFilter): Promise<Brand[]> => {
  const { data } = await axios.get(getURLWithFilterParams(URL.BRAND_LIST_URL, filters));
  if (filters.limit === "all") return data;
  return data.results;
};
