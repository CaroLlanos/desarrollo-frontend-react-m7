import { combineReducers } from 'redux';

import defaultReducer from './default/defaultReducers';
import productReducer from './Product/productReducer';
import formReducer from './Form/formReducer';
import dictionaryReducer from './dictionary/dictionaryReducer';

const rootReducer = combineReducers({
    default: defaultReducer,
    products: productReducer,
    form: formReducer,
    dictionary: dictionaryReducer
});

export default rootReducer;