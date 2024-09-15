import { ADD_WORD } from "./dictionaryTypes";
import { DELETE_WORD } from "./dictionaryTypes";

export const addWord = (wordData) => {
    return {
        type: ADD_WORD,
        payload: wordData
    }
}
export const deleteWord = (word) => {
    return {
        type: DELETE_WORD,
        payload: word
    }
}