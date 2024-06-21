import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Header, Footer } from "./components";
import { routes } from "./global/routes";
import { CategoriesProvider } from './global/CategoriesContext';
import { Categories } from "./pages/categories/Categories";

export const App = () => {
  return (
    <CategoriesProvider>
      <Header />
      <Categories />
      <RouterProvider router={routes} />
      <Footer />
    </CategoriesProvider>
  );
};
