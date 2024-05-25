import logo from "@/assets/logo.png";
import { getUserInfo } from "@/services/auth.services";
import { UserRole } from "@/types/common";
import drawerMenuItem from "@/utils/drawerMenuItem";
import { Box, Stack } from "@mui/material";
import List from "@mui/material/List";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
        sx={{
          paddingY: 1,
          marginTop: 1,
          textDecoration: "none",
          fontSize: 22,
          fontWeight: 600,
          color: "primary.main",
        }}>
        <Image src={logo} alt="logo" width={40} height={40} />
        Adoptify
      </Stack>
      {/* Drawer Menu Items */}
      <List>
        {drawerMenuItem(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
