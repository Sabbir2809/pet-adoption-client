import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RSelectField from "@/components/Forms/RSelectField";
import RFullScreenModal from "@/components/Shared/RFullScreenModal";
import { GENDER } from "@/constants/common";
import { useUpdateMyProfileMutation } from "@/redux/api/userApi";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

const ProfileUpdateModal = ({ open, setOpen, data }: TProps) => {
  const router = useRouter();
  const [updateMyProfile, { isLoading }] = useUpdateMyProfileMutation();

  const submitHandler = async (values: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(values));
      if (values.file) {
        formData.append("file", values.file[0]);
      }

      const res = await updateMyProfile(formData).unwrap();
      if (res?.id) {
        toast.success("Profile Updated Successfully");
        setOpen(false);
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RFullScreenModal open={open} setOpen={setOpen} title="Update My Profile">
      <RForm onSubmit={submitHandler} defaultValues={data}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="username" label="username" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="email" type="email" label="Email" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="phone" label="Phone Number" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput name="address" label="Address" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RSelectField items={GENDER} name="gender" label="Gender" fullWidth />
          </Grid>
        </Grid>

        <Button type="submit" variant="contained" disabled={isLoading}>
          Update
        </Button>
      </RForm>
    </RFullScreenModal>
  );
};

export default ProfileUpdateModal;
