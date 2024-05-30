"use client";
import AdoptionRequestModal from "@/components/UI/HomePage/AdoptionRequestModal";
import { useGetPetDetailsQuery } from "@/redux/api/petApi";
import { isLoggedIn } from "@/services/auth.services";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Container, Grid, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type TParams = {
  params: {
    petId: string;
  };
};

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "100%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const PetDetailsPage = ({ params }: TParams) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const id = params?.petId;
  const { data: petDetails, isLoading } = useGetPetDetailsQuery(id);

  if (!isLoggedIn()) {
    return router.push("/login");
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: "100px", minHeight: "100vh" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image src={petDetails?.photos} width={500} height={500} alt={petDetails?.name} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h3">{petDetails?.name}</Typography>
            <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
              {petDetails?.description}
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
                  Age
                </Typography>
                <Typography>{petDetails?.age}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Gender
                </Typography>
                <Typography>{petDetails?.gender}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Species
                </Typography>
                <Typography>{petDetails?.species}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Location
                </Typography>
                <Typography>{petDetails?.location}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Temperament
                </Typography>
                <Typography>{petDetails?.temperament}</Typography>
              </StyledInformationBox>
            </Stack>

            <Box mt={4}>
              <AdoptionRequestModal open={open} setOpen={setOpen} petId={petDetails?.id} />
              <Button
                startIcon={<SendIcon />}
                variant="contained"
                size="large"
                color="primary"
                onClick={() => setOpen(true)}>
                Adoption Request
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetDetailsPage;
