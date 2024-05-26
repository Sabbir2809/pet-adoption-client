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
  const res = await fetch("https://adoptify-server-j9m1.onrender.com/api/v1/pets?page=1&limit=3");
  const { data: pets } = await res.json();

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Pets Available For Adoption
        </Typography>
        <Typography component="p" fontWeight={400} fontSize={18} sx={{ marginTop: 2 }}>
          Life is easier with a furry best friend by your side. Find your new pet from our animal
          shelters.
        </Typography>
      </Box>
      <Container sx={{ margin: "30px auto" }}>
        <Grid container spacing={2}>
          {pets?.map((pet: TPet) => (
            <Grid item key={pet.name} xs={12} sm={6} md={4}>
              <Card sx={{ height: "100%" }}>
                <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Image src={pet?.photos} alt={pet?.name} width={500} height={300} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {pet.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pet.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      <strong>Age:</strong> {pet.age}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Breed:</strong> {pet.breed}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Location:</strong> {pet.location}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ justifyContent: "space-between", px: 2, paddingBottom: "20px" }}>
                    <Button component={Link} href={`/pets/${pet.id}`} variant="contained">
                      View Details
                    </Button>
                  </CardActions>
                </Box>
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
