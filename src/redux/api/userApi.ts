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
      query: () => ({
        url: "/user/all",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    // Dashboard Metadata
    dashboardMetadata: build.query({
      query: () => ({
        url: "/user/all",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    // change Profile Role
    changeProfileRole: build.mutation({
      query: (data) => ({
        url: `/user/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // change Profile Status
    changeProfileStatus: build.mutation({
      query: (data) => ({
        url: `/user/${data.id}`,
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
