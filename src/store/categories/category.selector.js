import { createSelector } from 'reselect'

// This is just can setup it in server side
// Transformation of data to the final shape is here 
const selectCategoryReducer = (state) => state.categories;


// just cacheOut the categories
// to prvent unneccessary  rendering of the category component
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((accumulator, category) => {
        const { title, items } = category;
        accumulator[title.toLowerCase()] = items;
        return accumulator;
    }, {})
) 