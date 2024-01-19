import axios from "@/api";

// Types
import { Brand } from "@/types";

// URLs
import * as URL from "./urls";

export const getBrands = async (): Promise<Brand[]> => {
  const { data } = await axios.get(URL.BRAND_LIST_URL);
  return data;
};

export const getMainBrands = async (): Promise<Brand[]> => {
  const { data } = await axios.get(URL.MAIN_BRAND_LIST_URL);
  return data;
};
