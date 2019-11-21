import { env } from "process";

const SERVER_URI = env.API_URL

export const GRAPHQL_URI = `${SERVER_URI}graphql`;
export const API_URI = `${SERVER_URI}api`;
export const AUTH_URI = `${SERVER_URI}auth`;
