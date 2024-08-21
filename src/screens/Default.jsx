import Logo from '../components/logo';
import Content from '../components/content';
import Description from '../components/description';
import Github from '../components/github';

const Default = () => {
    return (
        <>
            <header className="App-header"> 
                <Logo />
                <Description />
                <Content />
                <Github />
            </header>
        </>  
    );
};

export default Default;