// Setup 01 : Render KPIs
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    // Calling data from KPIs to VITE_BASE_URL local page <void, void> mean cancel argument now
        getKpis: build.query<void,void>({
        query: () => "kpi/kpis/",
        providesTags: ["Kpis"],
        }),
    })
})
export const {useGetKpisQuery} = api;


// Setup 02 : Complete Render KPIs Products Transactions
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import {
//   GetKpisResponse,
//   GetProductsResponse,
//   GetTransactionsResponse,
// } from "./types";

// export const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
//   reducerPath: "main",
//   tagTypes: ["Kpis", "Products", "Transactions"],
//   endpoints: (build) => ({
//     // Calling data from KPIs to VITE_BASE_URL local page
//     getKpis: build.query<Array<GetKpisResponse>, void>({
//       query: () => "kpi/kpis/",
//       providesTags: ["Kpis"],
//     }),
//     // Calling data from Products to VITE_BASE_URL local page
//     getProducts: build.query<Array<GetProductsResponse>, void>({
//       query: () => "product/products/",
//       providesTags: ["Products"],
//     }),
//     // Calling data from Transactions to VITE_BASE_URL local page
//     getTransactions: build.query<Array<GetTransactionsResponse>, void>({
//       query: () => "transaction/transactions/",
//       providesTags: ["Transactions"],
//     }),
//   }),
// });

// export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
//   api;
