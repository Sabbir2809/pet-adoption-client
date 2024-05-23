import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(180deg, #CEE5FD, #FFF)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}>
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}>
            Our Latest&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: "primary.main",
              }}>
              Pets
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}>
            The Pet Adoption website is a comprehensive platform designed to facilitate the adoption
            of pets by connecting potential adopters with available animals.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}>
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              placeholder="Searching for Pets"
            />
            <Button variant="contained" color="primary">
              Search
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
