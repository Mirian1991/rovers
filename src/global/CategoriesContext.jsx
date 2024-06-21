import React, { createContext, useState, useContext } from 'react';

const CategoriesContext = createContext();

export const useCategories = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleCategories = () => setDropdownOpen(!isDropdownOpen);

  return (
    <CategoriesContext.Provider value={{ isDropdownOpen, toggleCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
