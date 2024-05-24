import { Box, Container, Grid, Typography } from "@mui/material";

const Achievements = () => {
  const achievementCardStyle = {
    textAlign: "center",
    p: 3,
    borderRadius: 2,
    bgcolor: "primary.main",
    color: "primary.contrastText",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };

  return (
    <Container>
      <Box sx={{ margin: "50px auto" }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 5 }}>
          Our Achievements
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={6} md={3}>
            <Box sx={{ ...achievementCardStyle }}>
              <Typography variant="h4" gutterBottom>
                50+
              </Typography>
              <Typography variant="subtitle1">Pets Available for Adoption</Typography>
            </Box>
          </Grid>
          {/* Add similar Grid items for other achievements */}
          <Grid item xs={6} md={3}>
            <Box sx={{ ...achievementCardStyle }}>
              <Typography variant="h4" gutterBottom>
                10+
              </Typography>
              <Typography variant="subtitle1">Successful Adoptions</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ ...achievementCardStyle }}>
              <Typography variant="h4" gutterBottom>
                20+
              </Typography>
              <Typography variant="subtitle1">Happy Families</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ ...achievementCardStyle }}>
              <Typography variant="h4" gutterBottom>
                30+
              </Typography>
              <Typography variant="subtitle1">Pets Saved</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Achievements;
