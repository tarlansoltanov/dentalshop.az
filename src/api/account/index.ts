import axios from "@/api";

// Types
import { User } from "@/types";

// URLs
import * as URL from "./urls";

export const getAccount = async () => {
  const { data } = await axios.get(URL.ACCOUNT_URL);
  return data as User;
};

export const updateAccount = async (formData: FormData) => {
  const { data } = await axios.put(URL.ACCOUNT_URL, formData);
  return data as User;
};
