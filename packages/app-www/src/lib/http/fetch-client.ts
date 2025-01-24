import type { HttpClient } from './http-client';

type FetchOptions = {
    headers?: Record<string, string>;
    [key: string]: any; 
  };

export const FetchClient = (baseURL: string, defaultHeaders: Record<string, string> = {}): HttpClient => {
  return {
    async get<T = any>(url: string, options : FetchOptions = {}): Promise<T> {
      const response = await fetch(`${baseURL}${url}`, {
        ...options,
        method: 'GET',
        headers: {
          ...defaultHeaders,
          ...options.headers,
        },
      });
      if (!response.ok) throw new Error(`Fetch GET Error: ${response.statusText}`);
      return response.json();
    },

    async post<T = any>(url: string, body?: any, options : FetchOptions = {}): Promise<T> {
      const response = await fetch(`${baseURL}${url}`, {
        ...options,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...defaultHeaders,
          ...options.headers,
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error(`Fetch POST Error: ${response.statusText}`);
      return response.json();
    },

    async put<T = any>(url: string, body?: any, options : FetchOptions = {}): Promise<T> {
      const response = await fetch(`${baseURL}${url}`, {
        ...options,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...defaultHeaders,
          ...options.headers,
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error(`Fetch PUT Error: ${response.statusText}`);
      return response.json();
    },

    async delete<T = any>(url: string, options : FetchOptions = {}): Promise<T> {
      const response = await fetch(`${baseURL}${url}`, {
        ...options,
        method: 'DELETE',
        headers: {
          ...defaultHeaders,
          ...options.headers,
        },
      });
      if (!response.ok) throw new Error(`Fetch DELETE Error: ${response.statusText}`);
      return response.json();
    },
  };
};
