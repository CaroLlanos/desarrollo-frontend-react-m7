import useForm from "../../components/hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData } from "../../redux/Form/formActions";
import { cleanFormData } from "../../redux/Form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [values, handleChange, cleanForm] = useForm({ username: '', email: '', password: '' });
    const [showModalInfo, setShowModalInfo] = useState(true);
    const [showModalPassword, setShowModalPassword] = useState(false);
    const [showModalLogout, setShowModalLogout] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();
    const navegar = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        //dispatch(saveFormData(values));

        if (values.password === 'mod7ReactUSIP' && values.email && values.username) {
            dispatch(saveFormData(values));
            navegar('/');
        } else {
            setShowModalPassword(true);
        }
    }

    const hideModalInfo = () => {
        setShowModalInfo(false);
    };

    const hideModalPassword = () => {
        setShowModalPassword(false);
    };

    const hideModalLogout = () => {
        setShowModalLogout(false);
    }
    //const showModal = () => {
    //    setShowModalInfo(true);
    //}

    const passwordText = () => {
        setShowPassword(!showPassword);
    }
    const handleLogoutClick = () => {
        setShowModalLogout(true);
    };

    const handleLogoutConfirm = () => {
        dispatch(cleanFormData());
        cleanForm();
        setShowModalLogout(false);
    }

    return (
        
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalInfo
                visible={showModalInfo}
                message="Bienvenidos al Modulo 7"
                onClose={hideModalInfo}
            />
            <ModalInfo
                visible={showModalPassword}
                message="Password Incorrecto"
                onClose={hideModalPassword}
            />
            <ModalInfo
                visible={showModalLogout}
                message={
                    <span>
                    ¿Estas seguro de que quieres cerrar sesion?   
                    <button onClick={handleLogoutConfirm}>Presiona para salir</button>
                    </span>
                }
                onClose={hideModalLogout}
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
                            {showPassword ? "Ocultar" : "Mostrar"}
                    </button>    
                </div>

                <div className = "button-container">
                    <button type="submit">Submit</button>
                    <Link className="link-logout" onClick={handleLogoutClick}>Logout</Link>
                </div>
            </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;