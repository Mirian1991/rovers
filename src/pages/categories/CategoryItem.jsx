import React from 'react';

export const CategoryItem = ({ category, openCategory, onCategoryClick }) => {
    const isOpen = openCategory === category.id;

    const handleClick = (e) => {
        e.preventDefault();
        onCategoryClick(category.id);
    };

    return (
        <details className="dropdown" open={isOpen} onClick={handleClick}>
            <summary className="dropdown-summary">
                {category.category_name}
            </summary>
            {category.children.length > 0 && (
                <ul className="dropdown-menu">
                    {category.children.map(child => (
                        <li key={child.id} className="dropdown-item">
                            <CategoryItem
                                category={child}
                                openCategory={openCategory}
                                onCategoryClick={onCategoryClick}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </details>
    );
};
