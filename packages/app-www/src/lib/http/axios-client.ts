import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

import type { HttpClient } from "./http-client";

const createAxiosInstance = (baseURL: string, defaultHeaders: Record<string, string> = {}): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      ...defaultHeaders,
    },
  });
};

export const AxiosClient = (baseURL: string, defaultHeaders: Record<string, string> = {}): HttpClient => {
  const api = createAxiosInstance(baseURL, defaultHeaders);

  return {
    async get<T = any>(url: string, options?: AxiosRequestConfig): Promise<T> {
      const response = await api.get<T>(url, options);
      return response.data;
    },

    async post<T = any>(url: string, body?: any, options?: AxiosRequestConfig): Promise<T> {
      const response = await api.post<T>(url, body, options);
      return response.data;
    },

    async put<T = any>(url: string, body?: any, options?: AxiosRequestConfig): Promise<T> {
      const response = await api.put<T>(url, body, options);
      return response.data;
    },

    async delete<T = any>(url: string, options?: AxiosRequestConfig): Promise<T> {
      const response = await api.delete<T>(url, options);
      return response.data;
    },
  };
};
