"use client";
import Loader from "@/components/Shared/Loader";
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

const PetInfo = ({ label, value }: { label: string; value: string }) => (
  <StyledInformationBox>
    <Typography color="secondary" variant="caption">
      {label}
    </Typography>
    <Typography>{value}</Typography>
  </StyledInformationBox>
);

const PetDetailsPage = ({ params }: TParams) => {
  const router = useRouter();
  if (!isLoggedIn()) {
    router.push("/login");
  }

  const [open, setOpen] = useState(false);
  const id = params?.petId;
  const { data: petDetails, isLoading } = useGetPetDetailsQuery(id);

  return (
    <Container maxWidth="lg" sx={{ marginTop: "100px", marginBottom: "100px", minHeight: "100vh" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}>
              <Image
                src={petDetails?.photos}
                width={500}
                height={500}
                alt={petDetails?.name}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h3">{petDetails?.name}</Typography>
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                {petDetails?.description}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mt: 2 }}>
                <PetInfo label="Age" value={petDetails?.age} />
                <PetInfo label="Gender" value={petDetails?.gender} />
                <PetInfo label="Species" value={petDetails?.species} />
                <PetInfo label="Breed" value={petDetails?.breed} />
                <PetInfo label="Size" value={petDetails?.size} />
                <PetInfo label="Location" value={petDetails?.location} />
                <PetInfo label="Temperament" value={petDetails?.temperament} />
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
      )}
    </Container>
  );
};

export default PetDetailsPage;
