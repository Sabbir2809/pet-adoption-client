import Footer from "@/components/Shared/Footer";
import NavBar from "@/components/Shared/NavBar";
import { CssBaseline, Divider } from "@mui/material";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CssBaseline />
      <NavBar></NavBar>
      {children}
      <Divider />
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
