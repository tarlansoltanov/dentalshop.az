import axios from "@/api";

// Types
import { Category } from "@/types";

// URLs
import * as URL from "./urls";

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get(URL.CATEGORY_LIST_URL);
  return data;
};
