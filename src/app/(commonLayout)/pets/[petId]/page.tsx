"use client";
import AddPetModal from "@/components/UI/Dashboard/AddPetModal";
import ListItemCard from "@/components/UI/HomePage/ListItemCard";
import { useGetPetDetailsQuery } from "@/redux/api/petApi";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

type TParams = {
  params: {
    petId: string;
  };
};

const PetDetailsPage = ({ params }: TParams) => {
  const [open, setOpen] = useState(false);
  const id = params?.petId;
  const { data: petDetails, isLoading } = useGetPetDetailsQuery(id);

  return (
    <Container maxWidth="lg" sx={{ marginTop: "100px", height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              overflow: "hidden",
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image src={petDetails?.photo} width={500} height={500} alt={petDetails?.name} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: { xs: "1rem", md: "2rem" } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: 700,
                color: "#12263a",
                marginBottom: "1rem",
              }}>
              {petDetails.name}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.3rem", md: "1.5rem" },
                fontWeight: 600,
                color: "#12263a",
                marginBottom: "1rem",
              }}>
              About: {petDetails?.description}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                marginBottom: "1rem",
                color: "#12263a",
              }}>
              A brave German Shepherd who is fiercely loyal.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4} md={6}>
                <ListItemCard title="Age:" value={petDetails?.age} />
              </Grid>
              <Grid item xs={6} sm={4} md={6}>
                <ListItemCard title="Gender:" value={petDetails?.gender} />
              </Grid>
              <Grid item xs={6} sm={4} md={6}>
                <ListItemCard title="Species:" value={petDetails?.species} />
              </Grid>
              <Grid item xs={6} sm={4} md={6}>
                <ListItemCard title="Location:" value={petDetails?.location} />
              </Grid>
              <Grid item xs={6} sm={4} md={6}>
                <ListItemCard title="Temperament:" value={petDetails?.temperament} />
              </Grid>
            </Grid>
            <AddPetModal open={open} setOpen={setOpen} />
            <Button startIcon={<AddIcon />} variant="contained" onClick={() => setOpen(true)}>
              Add New Pet
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetDetailsPage;
