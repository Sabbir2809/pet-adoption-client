import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { xs: "center", sm: "left" },
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}>
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Typography variant="h4" fontWeight={600} gutterBottom color="#1565C0">
              Adoptify
            </Typography>
            <Box>
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon style={{ fontSize: "35px" }} />
              </IconButton>
              <IconButton color="primary" aria-label="X">
                <XIcon style={{ fontSize: "35px" }} />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedInIcon style={{ fontSize: "35px" }} />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary" mt={1}>
              Copyright &#169; {new Date().getFullYear()} Adoptify. All rights reserved.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant="h6" fontWeight={600} color="#1565C0">
            Explore
          </Typography>
          <Link href="/about-us" passHref>
            <Typography variant="body2" color="text.secondary">
              About us
            </Typography>
          </Link>
          <Link href="/about-us" passHref>
            <Typography variant="body2" color="text.secondary">
              Mission
            </Typography>
          </Link>
          <Link href="/about-us" passHref>
            <Typography variant="body2" color="text.secondary">
              Our Team
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant="h6" fontWeight={600} color="#1565C0">
            Legal
          </Typography>
          <Link href="/about-us" passHref>
            <Typography variant="body2" color="text.secondary">
              Terms
            </Typography>
          </Link>
          <Link href="/about-us" passHref>
            <Typography variant="body2" color="text.secondary">
              Privacy
            </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
