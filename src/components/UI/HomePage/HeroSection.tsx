import heroImg from "@/assets/pet.jpg";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: "clamp(3.5rem, 10vw, 4rem)",
              }}>
              Make Your New&nbsp;
              <Typography
                component="span"
                variant="h2"
                sx={{
                  fontSize: "clamp(3rem, 10vw, 4rem)",
                  color: "primary.main",
                  fontWeight: "600",
                }}>
                Friends
              </Typography>
            </Typography>
            <Typography color="text.secondary" component="p">
              The Pet Adoption website is a comprehensive platform designed to facilitate the
              adoption of pets by connecting potential adopters with available animals.
            </Typography>
          </Box>
          <Box>
            <Image src={heroImg} alt="adopt do not shop" width={450} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
