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

const PetsPage = async () => {
  const res = await fetch("https://adoptify-server-j9m1.onrender.com/api/v1/pets", {
    next: { revalidate: 30 },
  });
  const { data: pets } = await res.json();

  return (
    <Box sx={{ mb: 15, mt: 15 }}>
      <Typography
        variant="h4"
        fontWeight={550}
        textAlign="center"
        sx={{
          mb: 4,
        }}>
        Pets Available For Adoption
      </Typography>
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
      </Container>
    </Box>
  );
};

export default PetsPage;
