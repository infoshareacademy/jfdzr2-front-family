// ACTIONS
const LOG_IN = 'LOG_IN';

// REDUCER
export const loggedIn = (state = null, action) => {
    switch (action.type) {
        case LOG_IN:
            return action.payload;
        default:
            return state;
    }
}

// ACTION CREATORS
export const setUser = (userData) => ({type: LOG_IN, payload: userData});