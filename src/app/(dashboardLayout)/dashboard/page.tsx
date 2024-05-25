"use client";
import RAutoFileUploader from "@/components/Forms/RAutoFileUploader";
import ProfileInformation from "@/components/UI/Dashboard/ProfileInformation";
import ProfileUpdateModal from "@/components/UI/Dashboard/ProfileUpdateModal";
import { useGetMyProfileQuery, useUpdateMyProfileMutation } from "@/redux/api/userApi";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, Button, CircularProgress, Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
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
        }}>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress disableShrink />;
          </Box>
        ) : (
          <Grid2 container spacing={4}>
            <Grid2 xs={12} md={4}>
              <Box
                sx={{
                  height: 300,
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: 1,
                  textAlign: "center",
                }}>
                <Image
                  src={data?.avatarURL === null ? "" : data?.avatarURL}
                  alt="profile avatar"
                  width={300}
                  height={300}
                />
              </Box>
              <Box my={1}>
                {isUploading ? (
                  <CircularProgress disableShrink />
                ) : (
                  <RAutoFileUploader
                    name="file"
                    label="Choose"
                    icon={<CloudUploadIcon />}
                    onFileUpload={fileUploadHandler}
                    variant="text"
                    sx={{
                      width: "100%",
                    }}
                  />
                )}
              </Box>
              <Button fullWidth endIcon={<ModeEditIcon />} onClick={() => setOpen(true)}>
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
