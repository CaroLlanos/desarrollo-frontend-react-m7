import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNameModule } from '../../redux/default/defaultActions';

const Description = () => {
    const defaultState = useSelector(state => state.default);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNameModule('Desarrollo Frontend con React'))
    }, [dispatch]);
    return (
        <>
            <p>Edit <code>src/App.js</code> and save to reload.</p>
            <h4>{defaultState.name}</h4>
        </>
    );
};

export default Description;