import { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(20);

    const handleContador = () => {
        setContador(contador + 1);
    };

    return (
        <>
            <h4>{contador}</h4>
            <button onClick={handleContador}>Aumentar Valor</button>
        </>
    )
}

export default Contador;