// Dependencies
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

// Constants
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";

export const setAuthCookies = (
  { access, refresh }: { access: string; refresh: string },
  remember: boolean = false
) => {
  const accessDecoded = jwtDecode(access);

  Cookies.set(ACCESS_TOKEN, access, {
    path: "/",
    expires: new Date(accessDecoded.exp ? accessDecoded.exp * 1000 : 1000),
  });

  if (!remember) return;

  const refreshDecoded = jwtDecode(refresh);

  Cookies.set(REFRESH_TOKEN, refresh, {
    path: "/",
    expires: new Date(refreshDecoded.exp ? refreshDecoded.exp * 1000 : 1000),
  });
};

export const removeAuthCookies = () => {
  Cookies.remove(ACCESS_TOKEN);
  Cookies.remove(REFRESH_TOKEN);
};

export const getAccessToken = () => {
  const token = Cookies.get(ACCESS_TOKEN);
  return token ? token : "";
};

export const getRefreshToken = () => {
  const token = Cookies.get(REFRESH_TOKEN);
  return token ? token : "";
};

export const setCookie = (name: string, value: string, expires: number) => {
  Cookies.set(name, value, { path: "/", expires });
};

export const removeCookie = (name: string) => {
  Cookies.remove(name);
};
