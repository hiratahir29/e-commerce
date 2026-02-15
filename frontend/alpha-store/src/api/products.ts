
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://e-commerce-weld-eight-83.vercel.app/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<any,void>({
      query: () => `getProducts`,
    }),
  }),
})

export const { useGetProductsQuery } = productsApi