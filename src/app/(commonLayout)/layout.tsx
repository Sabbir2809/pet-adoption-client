import Footer from "@/components/Shared/Footer";
import NavBar from "@/components/Shared/NavBar";
import { CssBaseline } from "@mui/material";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CssBaseline />
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
