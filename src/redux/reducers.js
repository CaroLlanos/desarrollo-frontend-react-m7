import { combineReducers } from 'redux';

import defaultReducer from './default/defaultReducers';
import productReducer from './Product/productReducer';
import formReducer from './Form/formReducer';

const rootReducer = combineReducers({
    default: defaultReducer,
    products: productReducer,
    form: formReducer
});

export default rootReducer;