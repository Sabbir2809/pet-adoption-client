"use client";
import { Box, Stack, Typography, styled } from "@mui/material";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "100%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const ProfileInformation = ({ data }: any) => {
  return (
    <>
      <Typography variant="h5" color="primary.main">
        Profile Information
      </Typography>
      <Stack
        direction={{
          sx: "column",
          md: "row",
        }}
        gap={2}
        flexWrap="wrap">
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Role
          </Typography>
          <Typography>{data?.role}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Name
          </Typography>
          <Typography>{data?.username}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Email
          </Typography>
          <Typography>{data?.email}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Gender
          </Typography>
          <Typography>{data?.gender}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Address
          </Typography>
          <Typography>{data?.address}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Phone Number
          </Typography>
          <Typography>{data?.phone}</Typography>
        </StyledInformationBox>
      </Stack>
    </>
  );
};

export default ProfileInformation;
