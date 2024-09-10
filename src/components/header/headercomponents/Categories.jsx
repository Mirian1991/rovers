import React, { useState, useEffect } from "react";
const URL = "https://mysneakers.ge/adminold/get_product_details.php";

export const Categories = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className={`dropdown me-3 d-none d-lg-block ${
        dropdownOpen ? "show" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="btn btn-primary px-6"
        type="button"
        id="dropdownMenuButton1"
        aria-expanded={dropdownOpen}
      >
        <span className="me-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-grid"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </span>
        All Departments
      </button>
      <ul
        className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <a className="dropdown-item" href="pages/shop-grid.html">
            Dairy, Bread & Eggs
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="pages/shop-grid.html">
            Snacks & Munchies
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="pages/shop-grid.html">
            Fruits & Vegetables
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="pages/shop-grid.html">
            Cold Drinks & Juices
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="pages/shop-grid.html">
            Breakfast & Instant Food
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="pages/shop-grid.html">
            Bakery & Biscuits
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="pages/shop-grid.html">
            Chicken, Meat & Fish
          </a>
        </li>
      </ul>
    </div>
  );
};
