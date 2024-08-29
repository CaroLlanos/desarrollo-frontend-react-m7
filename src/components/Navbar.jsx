import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const formData = useSelector(state => state.form.formData);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <div className='user-info'>
                {formData.username && formData.email && (
                    <span>Bienvenido {formData.username}: {formData.email}</span>
                )}
            </div>
            
        </nav>
    );
};

export default Navbar;