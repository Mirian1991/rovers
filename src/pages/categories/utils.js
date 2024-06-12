export const buildCategoryTree = (categories, parentId = "0") => {
    return categories
        .filter(category => category.parent_id === parentId)
        .map(category => ({
            ...category,
            children: buildCategoryTree(categories, category.id)
        }));
};
