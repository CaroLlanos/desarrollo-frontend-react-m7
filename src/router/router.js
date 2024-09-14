import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Default from "../screens/Default";
import Products from '../screens/Products/Products';
import Login from '../screens/Forms/loginForm';
import LandingPage from "../screens/LandingPage/landingPage";
import Dictionary from '../screens/dictionary/dictionary';

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react-m7' : '/';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/default",
                element: <Default />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/dictionary",
                element: <Dictionary />,
            },
        ],
    },
],
    {
        basename :   basename
    }
);

export default routes;