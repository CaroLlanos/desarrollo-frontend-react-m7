import { SET_FORM_DATA } from "./formTypes";
import { CLEAN_FORM_DATA } from "./formTypes";

export const saveFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,
    }
}

export const cleanFormData = () => {
    return {
        type: CLEAN_FORM_DATA,
    }
}