import { combineReducers } from 'redux';

import defaultReducer from './default/defaultReducers';
import productReducer from './Product/productReducer';

const rootReducer = combineReducers({
    default: defaultReducer,
    products: productReducer
});

export default rootReducer;