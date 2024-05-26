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
      invalidatesTags: [tagTypes.adoption],
    }),

    // update Pet Profile
    updateAdoptionRequest: build.mutation({
      query: (body) => ({
        url: `/adoption/request/${body.id}`,
        method: "PATCH",
        data: body,
      }),
      invalidatesTags: [tagTypes.adoption],
    }),

    // get All Pets
    getAllAdoptionRequest: build.query({
      query: () => ({
        url: "/adoption/requests",
        method: "GET",
      }),
      providesTags: [tagTypes.adoption],
    }),
  }),
});

export const {
  useSubmitAdoptionRequestMutation,
  useUpdateAdoptionRequestMutation,
  useGetAllAdoptionRequestQuery,
} = adoptionRequestApi;
