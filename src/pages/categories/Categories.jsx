import React, { useRef, useEffect, useState } from 'react';
import categoriesData from "../../global/product_categories.json";
import { buildCategoryTree } from './utils';
import { CategoryItem } from './CategoryItem';
import { useCategories } from '../../global/CategoriesContext';

export const Categories = () => {
    const { isDropdownOpen, toggleCategories } = useCategories();
    const categoryTree = buildCategoryTree(categoriesData);
    const dropdownRef = useRef(null);
    const [openCategories, setOpenCategories] = useState({});

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                toggleCategories(); // Close dropdown when clicking outside
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen, toggleCategories]);

    const handleCategoryClick = (categoryId) => {
        setOpenCategories(prevOpenCategories => ({
            ...prevOpenCategories,
            [categoryId]: !prevOpenCategories[categoryId]
        }));
    };

    if (!isDropdownOpen) return null;

    return (
        <div className="categories-modal" ref={dropdownRef}>
            <div className="category-dropdown">
                {categoryTree.map(category => (
                    <CategoryItem
                        key={category.id}
                        category={category}
                        isOpen={!!openCategories[category.id]} // Check if category is open
                        onCategoryClick={handleCategoryClick}
                    />
                ))}
            </div>
        </div>
    );
};
