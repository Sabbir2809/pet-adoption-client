import { TMeta } from "@/types/common";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // add pet profile
    addPetProfile: build.mutation({
      query: (data) => ({
        url: `/pets`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.pet],
    }),

    // update Pet Profile
    updatePetProfile: build.mutation({
      query: (data) => ({
        url: "/pets",
        method: "PATCH",
        data: data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.pet],
    }),

    // get All Pets
    getAllPets: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/pets",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: [], meta: TMeta) => {
        return {
          pets: response,
          meta: meta,
        };
      },
      providesTags: [tagTypes.pet],
    }),

    // get Pet Details
    getPetDetails: build.query({
      query: (id) => ({
        url: `/pets/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.pet],
    }),

    // delete Pet Profile
    deletePetProfile: build.mutation({
      query: (id) => ({
        url: `/pets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.pet],
    }),
  }),
});

export const {
  useAddPetProfileMutation,
  useUpdatePetProfileMutation,
  useGetAllPetsQuery,
  useGetPetDetailsQuery,
  useDeletePetProfileMutation,
} = petApi;
