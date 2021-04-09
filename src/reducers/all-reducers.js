import { combineReducers } from 'redux';
import { shoppingCart } from './shopping-cart';
import { loggedIn } from './logged-in';

const allReducers = combineReducers({
    shoppingCart,
    loggedIn
})

export default allReducers;