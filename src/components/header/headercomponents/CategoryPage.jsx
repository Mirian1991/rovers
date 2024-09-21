// CategoryPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const CategoryPage = () => {
  const { id } = useParams(); // Get the category ID from the URL
  const [category, setCategory] = useState(null);

  useEffect(() => {
    // Fetch category details based on ID
    fetch(`https://mysneakers.ge/adminold/get_category_details.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((error) =>
        console.error("Error fetching category details:", error)
      );
  }, [id]);

  return (
    <div>
      <h1>Category Details</h1>
      {category ? (
        <div>
          <h2>{category.category_name}</h2>
          {/* Render more category details here */}
        </div>
      ) : (
        <p>{"setCategory "}</p>
      )}
    </div>
  );
};
