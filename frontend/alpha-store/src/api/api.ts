
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://e-commerce-weld-eight-83.vercel.app/',
     baseUrl: 'http://localhost:3000/',
  prepareHeaders: (headers, { getState }: any) => {
    const token = (getState()).user.accessToken;
    if (token) {
      headers.set("Authorization", `bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
  tagTypes: [],
});
