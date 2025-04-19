import axios, { AxiosRequestConfig } from "axios";
// config
import { HOST_API } from "@/config-global";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong",
    ),
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  auth: {
    me: "/auth/me",
    login: "/auth/login",
    register: "/auth/register",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },
};
