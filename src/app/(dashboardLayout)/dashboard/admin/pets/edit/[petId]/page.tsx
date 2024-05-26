"use client";
import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RSelectField from "@/components/Forms/RSelectField";
import { GENDER, SIZE } from "@/constants/common";
import { useGetPetDetailsQuery, useUpdatePetProfileMutation } from "@/redux/api/petApi";
import { Box, Button, Grid, Skeleton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    petId: string;
  };
};

const UpdatePet = ({ params }: TParams) => {
  const router = useRouter();
  const id = params?.petId;
  const { data, isLoading } = useGetPetDetailsQuery(id);
  const [updatePetProfile] = useUpdatePetProfileMutation();

  const submitHandler = async (values: FieldValues) => {
    const { age, file, ...rest } = values;

    const body = {
      data: JSON.stringify({ ...rest, age: Number(age) }),
      id: id,
    };

    try {
      const res = await updatePetProfile(body).unwrap();
      if (res?.id) {
        toast.success("Update Pet Successfully");
        router.push(`/dashboard/admin/pets`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Typography component="h5" variant="h5">
        Update Pet Information
      </Typography>
      {isLoading ? (
        <Box sx={{ width: "100%", height: "100vh", mt: 2 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      ) : (
        <RForm onSubmit={submitHandler} defaultValues={data}>
          <Grid container spacing={2} sx={{ my: 5 }}>
            <Grid item xs={12} sm={12} md={4}>
              <RInput name="name" label="Name" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <RInput name="photos" label="Photo" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <RInput name="description" label="Description" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <RInput name="age" label="Age" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <RInput name="breed" label="Breed" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <RSelectField items={GENDER} name="gender" label="Gender" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <RInput name="species" label="Species" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <RSelectField items={SIZE} name="size" label="size" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <RInput name="location" label="Location" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <RInput name="temperament" label="Temperament" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <RInput name="medicalHistory" label="MedicalHistory" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <RInput
                name="adoptionRequirements"
                label="Adoption Requirements"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="outlined">
            Update
          </Button>
        </RForm>
      )}
    </Box>
  );
};

export default UpdatePet;
