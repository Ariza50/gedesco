import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiEcommerceApp = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: (category) =>
        `products/category/${category}`,
    }),
    getCategories: builder.query({
      query: () =>
        `products/categories`,
    }),
  }),
});

export const { useGetProductsByCategoryQuery, useGetCategoriesQuery } = apiEcommerceApp;
