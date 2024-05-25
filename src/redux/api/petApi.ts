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
      query: () => ({
        url: "/pets",
        method: "GET",
      }),
      providesTags: [tagTypes.pet],
    }),

    // get Pet Details
    getPetDetails: build.query({
      query: (id) => ({
        url: `/pet/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.pet],
    }),

    // delete Pet Profile
    deletePetProfile: build.mutation({
      query: (id) => ({
        url: `/pet/${id}`,
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
