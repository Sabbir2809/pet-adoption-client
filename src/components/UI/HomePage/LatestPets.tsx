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

const pets = [
  {
    date: "2024-05-20",
    description: "A friendly golden retriever who loves to play fetch.",
    image:
      "https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg",
    imageLabel: "Golden Retriever",
    title: "Max",
  },
  {
    date: "2024-05-18",
    description: "A curious tabby cat with striking green eyes.",
    image:
      "https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg",
    imageLabel: "Tabby Cat",
    title: "Whiskers",
  },
  {
    date: "2024-05-15",
    description: "A lively parrot that enjoys mimicking sounds.",
    image:
      "https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg",
    imageLabel: "Parrot",
    title: "Polly",
  },
  {
    date: "2024-05-10",
    description: "A gentle rabbit with soft, white fur.",
    image:
      "https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg",
    imageLabel: "White Rabbit",
    title: "Snowball",
  },
  {
    date: "2024-05-08",
    description: "A playful dachshund with a long, sleek body.",
    image:
      "https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg",
    imageLabel: "Dachshund",
    title: "Oscar",
  },
  {
    date: "2024-05-05",
    description: "A majestic Maine Coon with a luxurious coat.",
    image:
      "https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg",
    imageLabel: "Maine Coon",
    title: "Luna",
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
            <Grid item key={pet.title} xs={12} sm={6} md={4}>
              <Card>
                <Box>
                  <Image src={pet.image} alt={pet.title} width={500} height={300} />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {pet.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pet.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between", px: 2, paddingBottom: "20px" }}>
                  <Button>Adoption</Button>
                  <Button variant="contained">View Details</Button>
                </CardActions>
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
