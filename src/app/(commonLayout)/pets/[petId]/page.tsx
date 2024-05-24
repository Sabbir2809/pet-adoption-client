import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const ListItemCard = ({ title, value }: any) => (
  <Card
    sx={{
      height: "100%",
      width: "100%",
      marginBottom: "1rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }}>
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "0.5rem" }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ opacity: 0.8 }}>
        {value}
      </Typography>
    </CardContent>
  </Card>
);

const PetDetailsPage = () => {
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
            <Image
              src="https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg"
              width={500}
              height={500}
              alt="pet image"
            />
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
              Rocky
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.3rem", md: "1.5rem" },
                fontWeight: 600,
                color: "#12263a",
                marginBottom: "1rem",
              }}>
              About this item:
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
                <ListItemCard title="Age:" value="Placeholder" />
              </Grid>
              <Grid item xs={6} sm={4} md={6}>
                <ListItemCard title="Breed:" value="Placeholder" />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetDetailsPage;
