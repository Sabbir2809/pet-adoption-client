import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  Typography,
} from "@mui/material";

import { Email, Phone } from "@mui/icons-material";

const teamMembers = [
  { name: "Md. Sabbir Hossain", role: "Founder" },
  { name: "Sumaiya Reza", role: "Community Outreach Coordinator" },
  { name: "Lamiya", role: "Adoption Counselor" },
];

const AboutUs = () => {
  return (
    <Container sx={{ padding: 4, mt: 10 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Welcome to Adoptify
        </Typography>
        <Typography variant="h6" component="p">
          We are dedicated to connecting loving families with pets in need of a forever
          home. Our mission is to make the adoption process seamless and fulfilling,
          ensuring every pet finds a safe and caring environment.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
              p: 3,
              border: "1px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              Our Mission
            </Typography>
            <Typography variant="body1">
              To provide a supportive adoption experience, promote responsible pet
              ownership, and enhance the well-being of all animals.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
              p: 3,
              border: "1px solid",
              borderColor: "secondary.main",
              borderRadius: 2,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              Our Story
            </Typography>
            <Typography variant="body1">
              Founded in 2024, we have helped thousands of pets find their forever homes.
              With a passion for animal welfare, our team works tirelessly to match pets
              with their perfect families.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
              p: 3,
              border: "1px solid",
              borderColor: "success.main",
              borderRadius: 2,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              How You Can Help
            </Typography>
            <Typography variant="body1">
              Adopt, donate, or volunteer – your support is crucial. Join us in our
              mission to give every pet the loving home they deserve.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: "center" }}>
          Meet the Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 2,
                  borderRadius: 2,
                  transition: "box-shadow 0.3s",
                  "&:hover": { boxShadow: 3 },
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}>
                <Avatar sx={{ width: 100, height: 100, margin: "0 auto 16px" }} />
                <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" component="h3" sx={{ flex: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Contact Us
        </Typography>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            borderRadius: 2,
          }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Have questions? Reach out to us via email or phone.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="mailto:adoptify@gmail.com" color="inherit" underline="none">
              <IconButton color="primary" aria-label="email">
                <Email />
              </IconButton>
            </Link>
            <Link href="tel:+8801829723692" color="inherit" underline="none">
              <IconButton color="primary" aria-label="phone">
                <Phone />
              </IconButton>
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutUs;
