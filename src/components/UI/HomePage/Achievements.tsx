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
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };

  return (
    <Container
      sx={{
        mt: 12,
        mb: 10,
      }}>
      <Box sx={{ margin: "50px auto", textAlign: "center" }}>
        <Typography variant="h4" fontWeight={550} gutterBottom sx={{ mb: 5 }}>
          Our Achievements
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={achievementCardStyle}>
              <Typography variant="h4" gutterBottom>
                05+
              </Typography>
              <Typography variant="subtitle1">Pets Available for Adoption</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={achievementCardStyle}>
              <Typography variant="h4" gutterBottom>
                02+
              </Typography>
              <Typography variant="subtitle1">Successful Adoptions</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={achievementCardStyle}>
              <Typography variant="h4" gutterBottom>
                02+
              </Typography>
              <Typography variant="subtitle1">Happy Families</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={achievementCardStyle}>
              <Typography variant="h4" gutterBottom>
                10+
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
