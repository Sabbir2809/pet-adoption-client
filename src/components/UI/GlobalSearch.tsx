"use client";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import { useDebounced } from "@/redux/hooks";
import { TPet } from "@/types/pet";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const GlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 800,
  });

  const { data, isLoading } = useGetAllPetsQuery({
    searchTerm: debouncedTerm,
  });
  const pets = data?.pets;

  const handleSearchClick = () => {
    setShowResults(true);
  };

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignSelf="center"
        spacing={1}
        useFlexGap
        sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}>
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          hiddenLabel
          size="medium"
          variant="outlined"
          placeholder="Search Your Pets"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSearchClick}>
          Search
        </Button>
      </Stack>
      <Container>
        {showResults && searchTerm && (
          <Grid container spacing={4}>
            {pets?.map((pet: TPet) => (
              <Grid item key={pet.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Box sx={{ position: "relative", height: 0, paddingTop: "56.25%" }}>
                    {pet.photos && (
                      <Image
                        src={pet?.photos}
                        alt={pet?.name}
                        fill
                        style={{
                          objectFit: "cover",
                          borderTopLeftRadius: "4px",
                          borderTopRightRadius: "4px",
                        }}
                        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                      />
                    )}
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {pet.name}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ mt: "auto", px: 1, pb: 1 }}>
                    <Button
                      component={Link}
                      href={`/pets/${pet.id}`}
                      variant="contained"
                      sx={{ width: "100%" }}>
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default GlobalSearch;
