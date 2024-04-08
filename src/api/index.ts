import axios from "axios";

// Router
import { redirect } from "react-router-dom";

// Store
import { store } from "@/store";

// Helpers
import { getAccessToken, getRefreshToken, removeAuthCookies } from "@/helpers/token";

// Actions
import { refreshToken } from "@/store/actions";

// Project API URL
const API_URL = import.meta.env.VITE_API_URL as string;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Accept-Language": "az",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const access = getAccessToken();

    if (access) config.headers.Authorization = `Bearer ${access}`;
    else delete config.headers.Authorization;

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url.includes("refresh")) {
      removeAuthCookies();
      redirect("/auth/logout");
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refresh = getRefreshToken();

      if (refresh) {
        await store.dispatch(refreshToken(refresh));
        return axiosInstance(originalRequest);
      }

      removeAuthCookies();
      redirect("/auth/logout");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
