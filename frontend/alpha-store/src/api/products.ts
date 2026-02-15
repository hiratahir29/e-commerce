
import {api} from './api';



export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<any,void>({
      query: () => `getProducts`,
    }),
  }),
})

export const { useGetProductsQuery } = productsApi