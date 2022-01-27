import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiEcommerce = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () =>
        `products`,
    }),
    getProduct: builder.query({
      query: ({ productId }) =>
        `products/${productId}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = apiEcommerce;
