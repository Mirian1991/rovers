import React from "react";
import { Header, Footer } from "../components";

export const Wrap = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
