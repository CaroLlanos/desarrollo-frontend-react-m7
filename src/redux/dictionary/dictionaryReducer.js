import { ADD_WORD } from "./dictionaryTypes";
import { DELETE_WORD } from "./dictionaryTypes";

const initialState = {
    dictionary: []
};

const dictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORD: {
            return {
                ...state,
                dictionary: [...state.dictionary, action.payload]
            };
        }
        case DELETE_WORD: {
            return {
                ...state,
                dictionary: state.dictionary.filter(
                    word => word.espanol !== action.payload.espanol &&
                            word.ingles !== action.payload.ingles &&
                            word.portugues !== action.payload.portugues
                )
            };
        }
        default:
            return state;
    }
};

export default dictionaryReducer;