import { env } from "process";

const SERVER_URL = env.API_URL

export const GRAPHQL_URL = `${SERVER_URL}graphql`;
export const API_URL = `${SERVER_URL}api`;
export const AUTH_URL = `${SERVER_URL}auth`;
