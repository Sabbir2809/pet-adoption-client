"use client";
import MenuDrawer from "@/components/UI/Dashboard/MenuDrawer";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <MenuDrawer>{children}</MenuDrawer>;
};

export default DashboardLayout;
