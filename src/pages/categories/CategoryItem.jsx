import React from 'react';

export const CategoryItem = ({ category, isOpen, onCategoryClick }) => {
    const handleToggle = () => {
        onCategoryClick(category.id);
    };

    return (
        <li>
            <details open={isOpen}>
                <summary onClick={handleToggle}>
                    {category.category_name}
                </summary>
                {category.children && category.children.length > 0 && (
                    <ul>
                        {category.children.map(child => (
                            <CategoryItem
                                key={child.id}
                                category={child}
                                isOpen={isOpen}  // Pass isOpen down to children
                                onCategoryClick={onCategoryClick}
                            />
                        ))}
                    </ul>
                )}
            </details>
        </li>
    );
};
