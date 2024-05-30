import { TPet } from "@/types/pet";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const LatestPets = async () => {
  const res = await fetch("https://adoptify-server-j9m1.onrender.com/api/v1/pets?page=1&limit=6", {
    next: { revalidate: 30 },
  });
  const { data: pets } = await res.json();

  return (
    <>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h4" fontWeight={550}>
          Pets Available For Adoption
        </Typography>
        <Typography
          component="p"
          fontWeight={400}
          fontSize={{ xs: 16, sm: 18 }}
          sx={{ marginTop: 2 }}>
          Life is easier with a furry best friend by your side. Find your new pet from our animal
          shelters.
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={4}>
          {pets?.map((pet: TPet) => (
            <Grid item key={pet.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Box sx={{ position: "relative", height: 0, paddingTop: "56.25%" }}>
                  <Image
                    src={pet?.photos}
                    alt={pet?.name}
                    layout="fill"
                    objectFit="cover"
                    style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {pet.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {pet.description}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                    <strong>Age:</strong> {pet.age}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    <strong>Breed:</strong> {pet.breed}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    <strong>Location:</strong> {pet.location}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: "auto", px: 2, pb: 2 }}>
                  <Button
                    component={Link}
                    href={`/pets/${pet.id}`}
                    variant="contained"
                    sx={{ width: "100%" }}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button component={Link} href="/pets" variant="outlined" size="large">
            View All Pets
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default LatestPets;
