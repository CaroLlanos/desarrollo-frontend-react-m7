import { SET_NAME_MODULE } from './defaultTypes';

//variables globales
//parte mas importante
const initialState = {
    name: 'Desarrollo Frontend con React',
};

const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME_MODULE: {
            return {
                ...state,
                name: action.payload,
            }
        }
        default: return state;
    }
};

export default defaultReducer;