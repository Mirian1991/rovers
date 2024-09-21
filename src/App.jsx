import React from "react";
import { RouterProvider } from "react-router-dom";

import { routes } from "./global/routes";

export const App = () => {
  return (
    <RouterProvider router={routes} />
  );
};
