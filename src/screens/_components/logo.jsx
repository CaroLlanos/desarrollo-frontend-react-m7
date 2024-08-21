import logo from "../../logo.svg";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNameModule } from '../../redux/default/defaultActions';

const Logo = () => {
    const defaultState = useSelector(state => state.default);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNameModule('Desarrollo Frontend con React'))
    }, [] );
    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <h6>{ defaultState.name}</h6>
        </>
    );
};

export default Logo;