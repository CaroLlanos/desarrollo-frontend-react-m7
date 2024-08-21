import Logo from './_components/logo';
import Description from './_components/description';

import Openlink from '../components/Openlink';

const Default = () => {
    return (
        <>
            <header className="App-header"> 
                <Logo />
                <Description />
                <Openlink title="Learn React" url="https://react.dev/" />
                
                <Openlink title="Proyecto (React)" url="https://github.com/CaroLlanos/desarrollo-frontend-react-m7" />

            </header>
        </>  
    );
};

export default Default;