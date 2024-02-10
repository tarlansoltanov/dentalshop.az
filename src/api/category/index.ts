import axios from "@/api";

// Helpers
import { getURLWithFilterParams } from "@/helpers";

// Types
import { Category } from "@/types";
import { CategoryFilter } from "@/types/filters";

// URLs
import * as URL from "./urls";

export const getCategories = async (filters: CategoryFilter): Promise<Category[]> => {
  const { data } = await axios.get(getURLWithFilterParams(URL.CATEGORY_LIST_URL, filters));
  if (filters.limit === "all") return data;
  return data.results;
};
