import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import { Link } from "react-router-dom"; // Import Link for navigation

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Fetch categories data from the API
    fetch("https://mysneakers.ge/adminold/get_categories.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className={`dropdown ${dropdownOpen ? "show" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        aria-expanded={dropdownOpen}
      >
        Categories
      </button>
      <ul
        className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
        aria-labelledby="dropdownMenuButton"
      >
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.id} className="dropdown-item dropdown-submenu">
              <Link to={`/category/${category.id}`} className="dropdown-link">
                {category.category_name}
              </Link>
              {category.children && category.children.length > 0 && (
                <ul className="dropdown-menu">
                  {category.children.map((subCategory) => (
                    <li key={subCategory.id} className="dropdown-item">
                      <Link
                        to={`/category/${subCategory.id}`}
                        className="dropdown-link"
                      >
                        {subCategory.category_name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))
        ) : (
          <li className="dropdown-item">Loading...</li>
        )}
      </ul>
    </div>
  );
};
