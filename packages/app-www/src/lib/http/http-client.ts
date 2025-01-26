export interface HttpClient {
  delete<T = any>(url: string, options?: HttpOptions): Promise<T>;
  get<T = any>(url: string, options?: HttpOptions): Promise<T>;
  post<T = any>(url: string, body?: any, options?: HttpOptions): Promise<T>;
  put<T = any>(url: string, body?: any, options?: HttpOptions): Promise<T>;
}

type HttpOptions = {
  headers?: Record<string, string>;
  params?: Record<string, any>;
  body?: any; // Pour POST/PUT
};
