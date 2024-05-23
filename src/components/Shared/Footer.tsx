import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import { Divider } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" },
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
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Pitus
              </Typography>

              <Stack direction="row" justifyContent="left" spacing={1} useFlexGap>
                <IconButton color="inherit" href="#" aria-label="GitHub">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" href="#" aria-label="X">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" href="#" aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
              </Stack>
              <Typography variant="body2" color="text.secondary" mt={1}>
                Copyright &#169; {new Date().getFullYear()} Pitus. All rights reserved.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}>
            <Typography variant="body2" fontWeight={600}>
              Company
            </Typography>
            <Link color="text.secondary" href="#">
              About us
            </Link>
            <Link color="text.secondary" href="#">
              Careers
            </Link>
            <Link color="text.secondary" href="#">
              Press
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}>
            <Typography variant="body2" fontWeight={600}>
              Legal
            </Typography>
            <Link color="text.secondary" href="#">
              Terms
            </Link>
            <Link color="text.secondary" href="#">
              Privacy
            </Link>
            <Link color="text.secondary" href="#">
              Contact
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
