import useForm from "../../components/hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData } from "../../redux/Form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";

import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange] = useForm({ username: '', email: '', password: '' });
    const [showModalInfo, setShowModalInfo] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        dispatch(saveFormData(values));
    }

    const hideModalInfo = () => {
        setShowModalInfo(false);
    };

    const showModal = () => {
        setShowModalInfo(true);
    }

    const passwordText = () => {
        setShowPassword(!showPassword);
    }

    return (
        
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalInfo
                visible={showModalInfo}
                message="Bienvenidos al Modulo 8"
                onClose={hideModalInfo}
            />
        <div className = "container">
                <form onSubmit={handleSubmit}>
                    
                <h5>username: {form.formData.username}</h5>
                <h5>email: {form.formData.email}</h5>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={values.username} onChange={handleChange}>
                    </input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={values.email} onChange={handleChange}>
                    </input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type={showPassword ? "text" : "password"} id="password" name="password" value={values.password} onChange={handleChange}>
                    </input>
                        <button type="button" onClick={passwordText}>
                            {showPassword ? "Ocultar" : "Mostrar"} Password
                    </button>    
                </div>

                <div className = "button-container">
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;