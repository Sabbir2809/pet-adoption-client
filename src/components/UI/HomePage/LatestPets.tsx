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

const pets = [
  {
    name: "Rocky",
    photo:
      "https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg",
    description: "A brave German Shepherd who is fiercely loyal.",
    age: "5 years",
    breed: "German Shepherd",
    location: "Phoenix",
  },
  {
    name: "Buddy",
    photo:
      "https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg",
    description: "An energetic Labrador who enjoys outdoor activities.",
    age: "3 years",
    breed: "Labrador Retriever",
    location: "Los Angeles",
  },
  {
    name: "Charlie",
    photo:
      "https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg",
    description: "A playful poodle with a fluffy coat.",
    age: "1 year",
    breed: "Poodle",
    location: "Chicago",
  },
  {
    name: "Bella",
    photo:
      "https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg",
    description: "A loving Shih Tzu who enjoys cuddles.",
    age: "4 years",
    breed: "Shih Tzu",
    location: "Houston",
  },
  {
    name: "Lucy",
    photo:
      "https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg",
    description: "An intelligent Border Collie with a knack for learning tricks.",
    age: "2 years",
    breed: "Border Collie",
    location: "Philadelphia",
  },
];

const LatestPets = () => {
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
          {pets.map((pet) => (
            <Grid item key={pet.name} xs={12} sm={6} md={4}>
              <Card sx={{ height: "100%" }}>
                <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Image src={pet.photo} alt={pet.name} width={500} height={300} />
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
                    <Button component={Link} href="/" variant="contained">
                      View Details
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="outlined" sx={{ marginTop: "20px" }}>
            View All
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default LatestPets;
