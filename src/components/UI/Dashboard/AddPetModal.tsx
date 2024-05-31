import RFileUploader from "@/components/Forms/RFileUploader";
import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RSelectField from "@/components/Forms/RSelectField";
import RFullScreenModal from "@/components/Shared/RFullScreenModal";
import { GENDER, SIZE } from "@/constants/common";
import { useAddPetProfileMutation } from "@/redux/api/petApi";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddPetModal = ({ open, setOpen }: TProps) => {
  const [addPetProfile, { isLoading }] = useAddPetProfileMutation();

  const submitHandler = async (values: FieldValues) => {
    const { age, file, ...rest } = values;
    const formData = new FormData();
    formData.append("data", JSON.stringify({ ...rest, age: Number(age), photos: "" }));
    if (file) formData.append("file", file);

    try {
      const res = await addPetProfile(formData).unwrap();
      if (res?.id) {
        toast.success("Add New Pet Successfully");
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RFullScreenModal open={open} setOpen={setOpen} title="Add a New Pet Profile">
      <RForm onSubmit={submitHandler}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="name" label="Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RFileUploader name="file" label="Upload File" sx={{ width: "100%" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="description" label="Description" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="age" label="Age" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="breed" label="Breed" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RSelectField items={GENDER} name="gender" label="Gender" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="species" label="Species" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RSelectField items={SIZE} name="size" label="size" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="location" label="Location" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="temperament" label="Temperament" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="medicalHistory" label="MedicalHistory" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="adoptionRequirements" label="Adoption Requirements" fullWidth />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Add New Pet
        </Button>
      </RForm>
    </RFullScreenModal>
  );
};

export default AddPetModal;
