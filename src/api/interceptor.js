import Cookies from "js-cookie";
import { domain } from "../utels/constents/const";

// endpoints where a 401 means "wrong credentials", not "session expired"
const AUTH_ENDPOINTS = /\/api\/users\/(login|signup|logout|update_pass|google)/;
const PUBLIC_PAGES = ["/login", "/sinup"];

let redirecting = false;

// clears the session and sends the user to the login page
export const forceLogout = () => {
  Cookies.remove("token");
  if (redirecting || PUBLIC_PAGES.includes(window.location.pathname)) return;
  redirecting = true;
  window.location.replace("/login");
};

// call with the request URL and the response status of any API call
export const handleUnauthorized = (url, status) => {
  if (status !== 401) return;
  const target = String(url);
  if (!target.startsWith(domain) || AUTH_ENDPOINTS.test(target)) return;
  forceLogout();
};

// wraps window.fetch once so every existing fetch(...) call gets the 401 handling
const originalFetch = window.fetch.bind(window);
window.fetch = async (input, init) => {
  const response = await originalFetch(input, init);
  handleUnauthorized(typeof input === "string" ? input : input?.url, response.status);
  return response;
};
