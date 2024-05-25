import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // register
    register: build.mutation({
      query: (data) => ({
        url: `auth/register`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // login
    login: build.mutation({
      query: (data) => ({
        url: `auth/login`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // refreshToken
    refreshToken: build.mutation({
      query: () => ({
        url: `auth/register`,
        method: "POST",
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // change Password
    changePassword: build.mutation({
      query: (data) => ({
        url: `/auth/change-password`,
        method: "POST",
        contentType: "application/json",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useRefreshTokenMutation,
  useChangePasswordMutation,
} = authApi;
