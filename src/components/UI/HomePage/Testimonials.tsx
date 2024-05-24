import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const userTestimonials = [
  {
    avatar: <Avatar alt="Abu Salkin" />,
    name: "Abu Salkin",
    testimonial:
      "I adopted my lovely cat from this platform, and it has been one of the best decisions of my life! My furry friend brings so much joy and love into my home.",
  },
  {
    avatar: <Avatar alt="Jannatul Anjum Shafa" />,
    name: "Jannatul Anjum Shafa",
    testimonial:
      "The team behind this platform is incredible. They guided me through the adoption process and matched me with the perfect dog. I'm grateful for their support.",
  },
  {
    avatar: <Avatar alt="Zafrin" />,
    name: "Zafrin",
    testimonial:
      "Adopting from this platform was a life-changing experience. My adopted rabbit has become a cherished member of my family, and I couldn't imagine life without him.",
  },
];

const Testimonials = () => {
  return (
    <Container
      id="testimonials"
      sx={{
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}>
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}>
        <Typography component="h2" variant="h4" color="text.primary" textAlign="center">
          Testimonials
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CardHeader avatar={testimonial.avatar} title={testimonial.name} />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
