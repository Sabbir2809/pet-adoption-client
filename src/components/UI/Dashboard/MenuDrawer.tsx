"use client";
import { authKey } from "@/constants/authKey";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import deleteCookies from "@/services/actions/deleteCookies";
import { Logout } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";
import SideBar from "./SideBar";

const drawerWidth = 240;
const MenuDrawer = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  // RTK
  const { data, isLoading } = useGetMyProfileQuery({});

  // handle Drawer
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(authKey);
    deleteCookies([authKey, "refreshToken"]);
    window.location.href = "/login";
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#F4F7FE",
          boxShadow: 0,
          borderBottom: "1px solid #ddd",
          py: 1,
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon sx={{ color: "primary.main" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}>
            <Box>
              <Typography
                variant="subtitle1"
                noWrap
                component="div"
                sx={{ color: "rgba(11, 17, 52, 0.6)" }}>
                Hi, {isLoading ? "Loading..." : data?.username}
              </Typography>
              <Typography sx={{ color: "primary.main" }}>Welcome to Adoptify</Typography>
            </Box>
            <Stack direction="row" gap={3} alignItems="center">
              <Link href="/dashboard">
                <Avatar
                  alt={data?.username}
                  src={data?.avatarURL}
                  sx={{ border: "2px solid #1586FD" }}
                />
              </Link>
              <Typography onClick={handleLogout}>
                <Logout
                  fontSize="medium"
                  color="primary"
                  sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
                />
              </Typography>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          <SideBar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open>
          <SideBar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};
export default MenuDrawer;
