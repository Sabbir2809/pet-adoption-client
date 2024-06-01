import heroImg from "@/assets/pet.jpg";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import GlobalSearch from "../GlobalSearch";

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
            width: "100%",
          }}>
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "100%", md: "50%" },
              mb: { xs: 4, md: 0 },
            }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
              }}>
              Make Your New&nbsp;
              <Typography
                component="span"
                variant="h2"
                sx={{
                  fontSize: "clamp(2.5rem, 8vw, 4rem)",
                  color: "primary.main",
                  fontWeight: "600",
                }}>
                Friends
              </Typography>
            </Typography>
            <Typography color="text.secondary" component="p" sx={{ mt: 2 }}>
              The Pet Adoption website is a comprehensive platform designed to facilitate the
              adoption of pets by connecting potential adopters with available animals.
            </Typography>
            <GlobalSearch />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: { xs: "100%", md: "50%" },
            }}>
            <Image
              src={heroImg}
              alt="adopt do not shop"
              layout="responsive"
              width={450}
              height={450}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
