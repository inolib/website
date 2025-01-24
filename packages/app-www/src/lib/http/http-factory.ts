import { AxiosClient } from "./axios-client";
import { FetchClient } from "./fetch-client";
import type { HttpClient } from "./http-client";

const clientType = process.env.HTTP_CLIENT || "fetch";
const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const apiToken = process.env.STRAPI_API_TOKEN;
const defaultHeaders = {
  Authorization: `Bearer ${apiToken || ""}`,
};

export const HttpFactory: HttpClient = (clientType === "fetch" ? FetchClient : AxiosClient)(baseURL, defaultHeaders);
