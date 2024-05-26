import { TMeta } from "@/types/common";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get my profile
    getMyProfile: build.query({
      query: () => ({
        url: "/user/my-profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    // update my profile
    updateMyProfile: build.mutation({
      query: (data) => ({
        url: "/user/update-my-profile",
        method: "PATCH",
        data: data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // get All Users
    getAllUsers: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/user/all",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: [], meta: TMeta) => {
        return {
          users: response,
          meta: meta,
        };
      },
      providesTags: [tagTypes.user],
    }),

    // Dashboard Metadata
    dashboardMetadata: build.query({
      query: () => ({
        url: "/user/dashboard",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    // change Profile Role
    changeProfileRole: build.mutation({
      query: (data) => ({
        url: `/user/${data.id}/role`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // change Profile Status
    changeProfileStatus: build.mutation({
      query: (data) => ({
        url: `/user/${data.id}/status`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
  useGetAllUsersQuery,
  useDashboardMetadataQuery,
  useChangeProfileRoleMutation,
  useChangeProfileStatusMutation,
} = userApi;
