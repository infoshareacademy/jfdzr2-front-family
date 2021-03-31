import { createSelector } from 'reselect';

// **************** SELECTORS FOR THE SHOPPING CART ***************

export const coursesInCartSelector = state => state.shoppingCart.courses;

export const coursesInCartIdsSelector = createSelector(
    coursesInCartSelector,
    (courses) => courses.map(course => course.id)
);

export const coursesInCartPricesSelector = createSelector(
    coursesInCartSelector,
    (courses) => courses.map(course => course.price)
) 

export const isCourseInCartSelector = (courseID) => createSelector(
    coursesInCartIdsSelector,
    ids => ids.includes(courseID)
)

export const totalPriceOfCoursesInCartSelector = createSelector(
    coursesInCartPricesSelector,
    (prices) => prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2)
)

// ***********************************