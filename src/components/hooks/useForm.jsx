import { useState } from 'react';

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const cleanForm = () => {
        setValues(initialValues);
    }

    return [values, handleChange, cleanForm];
}

export default useForm;