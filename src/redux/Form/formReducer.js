import { SET_FORM_DATA } from './formTypes';
import { CLEAN_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },
};

const secretPassword = 'mod7ReactUSIP';

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA: {
            if (action.payload.password === secretPassword) {
                return {
                    ...state,
                    formData: {
                        ...state.formData,
                        ...action.payload,
                    }
                }
            } else {
                return state;
            }
            
        }
        case CLEAN_FORM_DATA: {
            return {
                ...state,
                formData: {
                    username: '',
                    email: '',
                    password: ''
                }
            }
        }
        default:
            return state;
    }
};

export default formReducer;