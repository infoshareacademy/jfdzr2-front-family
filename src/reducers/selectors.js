import { createSelector } from 'reselect';

export const coursesInCart = state => state.shoppingCart.courses;

export const coursesInCartIds = createSelector(
    coursesInCart,
    (courses) => courses.map(course => course.id)
);

export const coursesInCartPrices = createSelector(
    coursesInCart,
    (courses) => courses.map(course => course.price)
) 

export const isCourseInCart = (courseID) => createSelector(
    coursesInCartIds,
    ids => ids.includes(courseID)
)