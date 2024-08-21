import { useState, useEffect } from 'react';

const Contador = () => {
    //contador, valor como tal
    //setContador, funcion que cambia el valor del contador
    const [contador, setContador] = useState(25);

    //Ejercicio: Cuando el contador llegue a 15, poner una alerta usando useEffect
    //montado = cuando se renderiza en el navegador
    //este useeffect se ejecuta cuando el contador se haya montado
    useEffect(() => {
        setContador(20);
    }, []);

    //este useeffect se ejecuta cuando cambie el valor del contador
    useEffect(() => {
        if (contador === 15) {
            alert('contador es 15');
        }
    }, [contador]);

    //este useeffect se ejecuta cuando el componente se haya desmontado (no aparece en el navegador)
    useEffect(() => {
        return () => {
            console.log('El componenete se desmonto');
        }
    });

    //Funcion que aumenta contador en 1
    const handleContador = () => {
        setContador(contador + 1);
    };

    const disminuyeContador = () => {
        setContador(contador - 1);
    }

    return (
        <>
            <h4>{contador}</h4>
            <div>
                <button onClick={handleContador}>Aumentar Valor</button>
                <button onClick={disminuyeContador}>Disminuir Valor</button>
            </div>
        </>
    )
}

export default Contador;