"use client";
import RAutoFileUploader from "@/components/Forms/RAutoFileUploader";
import Loader from "@/components/Shared/Loader";
import ProfileInformation from "@/components/UI/Dashboard/ProfileInformation";
import ProfileUpdateModal from "@/components/UI/Dashboard/ProfileUpdateModal";
import { useGetMyProfileQuery, useUpdateMyProfileMutation } from "@/redux/api/userApi";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Avatar, Box, Button, CircularProgress, Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

const MyProfilePage = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetMyProfileQuery(undefined);

  const [updateMyProfile, { isLoading: isUploading }] = useUpdateMyProfileMutation();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));
    updateMyProfile(formData);
  };

  return (
    <>
      <ProfileUpdateModal open={open} setOpen={setOpen} data={data} />
      <Container
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        {isLoading ? (
          <Loader />
        ) : (
          <Grid2 container spacing={4}>
            <Grid2
              xs={12}
              md={4}
              sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                {data?.avatarURL ? (
                  <Avatar
                    src={data.avatarURL}
                    alt="profile avatar"
                    sx={{ width: 250, height: 250, border: "2px solid #1586FD" }}
                  />
                ) : (
                  <Avatar sx={{ width: 250, height: 250 }} />
                )}
              </Box>
              <Box my={1} sx={{ width: "100%" }}>
                {isUploading ? (
                  <CircularProgress disableShrink />
                ) : (
                  <RAutoFileUploader
                    name="file"
                    label="Choose"
                    icon={<CloudUploadIcon />}
                    onFileUpload={fileUploadHandler}
                    variant="contained"
                    sx={{
                      width: "100%",
                    }}
                  />
                )}
              </Box>
              <Button
                variant="outlined"
                fullWidth
                endIcon={<ModeEditIcon />}
                onClick={() => setOpen(true)}
                sx={{ mt: 2 }}>
                Edit My Profile
              </Button>
            </Grid2>

            <Grid2 xs={12} md={8}>
              <ProfileInformation data={data} />
            </Grid2>
          </Grid2>
        )}
      </Container>
    </>
  );
};

export default MyProfilePage;
