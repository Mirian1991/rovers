import React from "react";
import { RouterProvider } from "react-router-dom";
import { Header, Footer } from "./components";
import { routes } from "./global/routes";

export const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </>
  );
};
