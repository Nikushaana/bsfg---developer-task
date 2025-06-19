import axios from "axios";

export const axiosFront = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
});

axiosFront.interceptors.request.use((config) => {
  return config;
});
