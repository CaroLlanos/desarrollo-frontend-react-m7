import { combineReducers } from 'redux';

import defaultReducer from './default/defaultReducers';

const rootReducer = combineReducers({
    default: defaultReducer,
});

export default rootReducer;