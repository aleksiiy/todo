import * as Cookies from "typescript-cookie";

const cookiesFun = {
  getItem: (key: string) => Cookies.getCookie(key),
  setItem: (key: string, value: string, exp: number) => Cookies.setCookie(key, value, { expires: setExp(exp), secure: true }),
  removeItem: (key: string) => Cookies.removeCookie(key)
};

const setExp = (value: number) => (1 / 86400) * value;

export default cookiesFun;
