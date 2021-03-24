// ACTIONS
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// INITIAL STATE
const initialState = {
    courses: []
}

// REDUCER
export const shoppingCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                courses: [...state.courses, action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                courses: state.courses.filter(course => course.id !== action.payload)
            }
        default:
            return state
    }
}

// ACTION CREATORS
export const addToCart = (course) => ({type: ADD_TO_CART, payload: course});
export const removeFromCart = (courseID) => ({type: REMOVE_FROM_CART, payload: courseID});