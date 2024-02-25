import axios from "@/api";

// Types
import { User } from "@/types";
import { Pagination } from "@/types/filters";

// Helpers
import { getURLWithFilterParams } from "@/helpers";

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

/* Cart */
export const getCart = async () => {
  const { data } = await axios.get(`${URL.CART_LIST_URL}?limit=all`);
  return data;
};

export const addToCart = async (formData: FormData) => {
  const { data } = await axios.post(URL.CART_LIST_URL, formData);
  return data;
};

export const removeFromCart = async (slug: string) => {
  const { data } = await axios.delete(`${URL.CART_LIST_URL}?product=${slug}`);
  return data;
};

export const checkDiscount = async (code: string) => {
  const { data } = await axios.get(`${URL.DISCOUNT_LIST_URL}?code=${code}`);
  return data;
};

export const checkout = async (formData: FormData) => {
  const { data } = await axios.post(URL.ORDER_LIST_URL, formData);
  return data;
};

/* Favorites */
export const getFavorites = async (filters: Pagination) => {
  const { data } = await axios.get(getURLWithFilterParams(URL.FAVORITE_LIST_URL, filters));
  return { data: data.results, count: data.count };
};

export const addFavorite = async (formData: FormData) => {
  const { data } = await axios.post(URL.FAVORITE_LIST_URL, formData);
  return data;
};

export const removeFavorite = async (slug: string) => {
  const { data } = await axios.delete(`${URL.FAVORITE_LIST_URL}?product=${slug}`);
  return data;
};

/* Orders */
export const getOrders = async () => {
  const { data } = await axios.get(`${URL.ORDER_LIST_URL}?limit=all`);
  return data;
};

export const getOrder = async (id: number) => {
  const { data } = await axios.get(URL.ORDER_DETAIL_URL(id));
  return data;
};

/* Free Zone */
export const getFreeZone = async (filters: Pagination) => {
  const { data } = await axios.get(getURLWithFilterParams(URL.FREEZONE_LIST_URL, filters));
  return { data: data.results, count: data.count };
};
