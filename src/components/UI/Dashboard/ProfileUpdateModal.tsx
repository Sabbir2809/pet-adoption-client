import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RSelectField from "@/components/Forms/RSelectField";
import RFullScreenModal from "@/components/Shared/RFullScreenModal";
import { GENDER } from "@/constants/common";
import { useUpdateMyProfileMutation } from "@/redux/api/userApi";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

const ProfileUpdateModal = ({ open, setOpen, data }: TProps) => {
  const [updateMyProfile, { isLoading }] = useUpdateMyProfileMutation();

  const submitHandler = async (values: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(values));

      const res = await updateMyProfile(formData).unwrap();
      if (res) {
        toast.success("Profile Updated Successfully");
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RFullScreenModal open={open} setOpen={setOpen} title="Update Profile">
      <RForm onSubmit={submitHandler} defaultValues={data}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <RInput name="username" label="username" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RInput name="email" type="email" label="Email" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RInput name="phone" label="Phone Number" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RInput name="address" label="Address" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RSelectField items={GENDER} name="gender" label="Gender" sx={{ mb: 2 }} fullWidth />
          </Grid>
        </Grid>

        <Button type="submit" disabled={isLoading}>
          Save
        </Button>
      </RForm>
    </RFullScreenModal>
  );
};

export default ProfileUpdateModal;
