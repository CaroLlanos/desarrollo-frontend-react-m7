import Logo from './_components/logo';
import Description from './_components/description';

import Openlink from '../components/Openlink';
import Lessoninfo from './_components/lessoninfo';

const Default = () => {
    return (
        <>
            <header className="App-header"> 
                <Logo />
                <Description />
                <Openlink title="Learn React" url="https://react.dev/" />
                
                <Openlink title="Proyecto (React)" url="https://github.com/CaroLlanos/desarrollo-frontend-react-m7" />

                <Lessoninfo number="1" text="Introduccion a React y Estructura del Proyecto" />
                <Lessoninfo number="2" text="Componentes, context API para la gestion de estados" />

            </header>
        </>  
    );
};

export default Default;