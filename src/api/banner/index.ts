import axios from "@/api";

// Helpers
import { getURLWithFilterParams } from "@/helpers";

// Types
import { Banner } from "@/types/models";
import { BannerFilter } from "@/types/filters";

// URLs
import * as URL from "./urls";

export const getBanners = async (filters: BannerFilter): Promise<Banner[]> => {
  const { data } = await axios.get(getURLWithFilterParams(URL.BANNER_LIST_URL, filters));
  if (filters.limit === "all") return data;
  return data.results;
};
