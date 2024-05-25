import { axiosBaseQuery } from "@/utils/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

// baseApi
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}` }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
