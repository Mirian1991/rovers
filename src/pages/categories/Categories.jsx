import React, { useState } from 'react';
import categoriesData from "../../global/product_categories.json";
import { buildCategoryTree } from './utils';
import { CategoryItem } from './CategoryItem';

export const Categories = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const categoryTree = buildCategoryTree(categoriesData);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <button onClick={toggleDropdown} className="category-button">
                Categories
            </button>
            {isDropdownOpen && (
                <div className="category-dropdown">
                    {categoryTree.map(category => (
                        <CategoryItem key={category.id} category={category} />
                    ))}
                </div>
            )}
        </div>
    );
};
