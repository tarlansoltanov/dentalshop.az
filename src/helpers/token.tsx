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
