import useForm from "../../components/hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData } from "../../redux/Form/formActions";

const LoginForm = () => {
    const [values, handleChange] = useForm({ username: '', email: '', password: ''});
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        dispatch(saveFormData(values));
    }

    return (
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
                    <input type="password" id="password" name="password" value={values.password} onChange={handleChange}>
                    </input>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;