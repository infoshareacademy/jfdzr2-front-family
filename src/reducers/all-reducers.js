import { combineReducers } from 'redux';
import { shoppingCart } from './shopping-cart';

const allReducers = combineReducers({
    shoppingCart
})

export default allReducers;