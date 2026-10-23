import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
