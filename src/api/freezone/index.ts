import axios from "@/api";

// Helpers
import { getURLWithFilterParams } from "@/helpers";

// Types
import { FreezoneItem } from "@/types";
import { FreezoneFilter } from "@/types/filters";

// URLs
import * as URL from "./urls";

export const getFreezoneItems = async (
  filters: FreezoneFilter
): Promise<{ data: FreezoneItem[]; count: number }> => {
  const { data } = await axios.get(getURLWithFilterParams(URL.FREEZONE_LIST_URL, filters));
  return { data: data.results, count: data.count };
};

export const getFreezoneItem = async (slug: string): Promise<FreezoneItem> => {
  const { data } = await axios.get(URL.FREEZONE_DETAIL_URL(slug));
  return data;
};