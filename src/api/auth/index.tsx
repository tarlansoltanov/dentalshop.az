import axios from "@/api";

// URLs
import * as URL from "./urls";

export const postLogin = (data: FormData) =>
  axios.post(URL.LOGIN_URL, data).then((response) => response.data);

export const postRegister = (data: FormData) =>
  axios.post(URL.REGISTER_URL, data).then((response) => response.data);
