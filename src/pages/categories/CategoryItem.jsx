import React, { useState } from 'react';

export const CategoryItem = ({ category }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <details className="dropdown" open={isOpen} onClick={toggleDropdown}>
            <summary className="dropdown-summary">
                {category.category_name}
            </summary>
            {category.children.length > 0 && (
                <ul className="dropdown-menu">
                    {category.children.map(child => (
                        <li key={child.id} className="dropdown-item">
                            <CategoryItem category={child} />
                        </li>
                    ))}
                </ul>
            )}
        </details>
    );
};
