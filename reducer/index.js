import {userDetails} from './adminReducer';
import {movieDetails} from './movieReducer';
import {preCartDetails} from './preCartReducer';
import {cartDetails} from './cartReducer';
import {orderDetails} from './orderReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({userDetails,movieDetails,preCartDetails,cartDetails,orderDetails});
export default rootReducer;