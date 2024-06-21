import React, { useState, useEffect, useRef } from 'react';
import categoriesData from "../../global/product_categories.json";
import { buildCategoryTree } from './utils';
import { CategoryItem } from './CategoryItem';

export const Categories = () => {
    const [openCategory, setOpenCategory] = useState(null);
    const categoryTree = buildCategoryTree(categoriesData);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenCategory(null); // Close the dropdown if the click is outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleCategoryClick = (categoryId) => {
        setOpenCategory(openCategory === categoryId ? null : categoryId);
    };

    return (
        <div className="categories-modal" ref={dropdownRef}>
            <div className="category-dropdown">
                {categoryTree.map(category => (
                    <CategoryItem
                        key={category.id}
                        category={category}
                        openCategory={openCategory}
                        onCategoryClick={handleCategoryClick}
                    />
                ))}
            </div>
        </div>
    );
};
