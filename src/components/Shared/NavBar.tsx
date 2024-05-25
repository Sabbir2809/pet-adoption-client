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
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

const NavBar = () => {
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);

  const AuthButton = dynamic(() => import("@/components/UI/AuthButton"), { ssr: false });

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
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
          <Link href="/">
            <Image src={logo} width={40} alt="logo" />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: "-18px",
              px: 0,
            }}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem sx={{ ml: "30px", py: "6px", px: "12px" }}>
                <Typography
                  component={Link}
                  href="/"
                  sx={{
                    textDecoration: "none",
                    color: pathname === "/" ? "#1565C0" : "black",
                  }}>
                  Home
                </Typography>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Typography
                  component={Link}
                  href="/pets"
                  sx={{
                    textDecoration: "none",
                    color: pathname === "/pets" ? "#1565C0" : "black",
                  }}>
                  Pets
                </Typography>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Typography
                  component={Link}
                  href="/about-us"
                  sx={{
                    textDecoration: "none",
                    color: pathname === "/about-us" ? "#1565C0" : "black",
                  }}>
                  About Us
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
            <AuthButton></AuthButton>
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
                <MenuItem>
                  <Typography
                    component={Link}
                    href="/"
                    sx={{
                      textDecoration: "none",
                      color: pathname === "/" ? "#1565C0" : "black",
                    }}>
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography
                    component={Link}
                    href="/pets"
                    sx={{
                      textDecoration: "none",
                      color: pathname === "/pets" ? "#1565C0" : "black",
                    }}>
                    Pets
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography
                    component={Link}
                    href="/about-us"
                    sx={{
                      textDecoration: "none",
                      color: pathname === "/about-us" ? "#1565C0" : "black",
                    }}>
                    About Us
                  </Typography>
                </MenuItem>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <AuthButton></AuthButton>
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
