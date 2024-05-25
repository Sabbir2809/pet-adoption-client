import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const adoptionRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // submit Adoption Request
    submitAdoptionRequest: build.mutation({
      query: (data) => ({
        url: `/adoption/request`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.pet],
    }),

    // update Pet Profile
    updateAdoptionRequest: build.mutation({
      query: (data) => ({
        url: `/pets${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.pet],
    }),

    // get All Pets
    getAllAdoptionRequest: build.query({
      query: () => ({
        url: "/adoption/requests",
        method: "GET",
      }),
      providesTags: [tagTypes.pet],
    }),
  }),
});

export const {
  useSubmitAdoptionRequestMutation,
  useUpdateAdoptionRequestMutation,
  useGetAllAdoptionRequestQuery,
} = adoptionRequestApi;
