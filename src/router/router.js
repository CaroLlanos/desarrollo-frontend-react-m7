import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Default from "../screens/Default";
import Products from '../screens/Products/Products';
import Login from '../screens/Forms/loginForm';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
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
        ],
    },
]);

export default routes;