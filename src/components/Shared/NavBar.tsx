"use client";
import logo from "@/assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}>
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            boxShadow:
              "0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)",
          }}>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              ml: "-18px",
              px: 0,
            }}>
            <Image
              src={logo}
              width={50}
              height={50}
              style={{
                marginLeft: "5px",
              }}
              alt="logo"
            />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Typography variant="body2" color="text.primary">
                  Home
                </Typography>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Typography variant="body2" color="text.primary">
                  About
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}>
            <Button variant="text" size="small">
              <Link href="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </Button>
            <Button variant="contained" size="small">
              <Link href="/register" style={{ textDecoration: "none", color: "white" }}>
                Register
              </Link>
            </Button>
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "4px" }}>
              <MenuIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: "60dvw",
                  p: 2,
                  backgroundColor: "background.paper",
                  flexGrow: 1,
                }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    flexGrow: 1,
                  }}></Box>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <Divider />
                <MenuItem>
                  <Button variant="contained" sx={{ width: "100%" }}>
                    <Link href="/register" style={{ textDecoration: "none", color: "white" }}>
                      Register
                    </Link>
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button variant="outlined" sx={{ width: "100%" }}>
                    <Link href="/login" style={{ textDecoration: "none" }}>
                      Login
                    </Link>
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;