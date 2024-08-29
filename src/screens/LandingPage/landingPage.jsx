const LandingPage = () => {
    return (
        <div className="landingContainer">
            <main className="content">
                <div className="banner">
                    <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
                </div>
                <section className="intro">
                    <h2>Bienvenido</h2>
                    <hr></hr>
                    <p>
                        Este modulo se centra en el uso de <b>React</b>, incluyendo la creacion de <b>componentes</b>, el manejo de <b>hooks</b>, y el uso de <b>Redux</b>.
                    </p>
                </section>
                <section className="temas">
                    <h2>Temas Cubiertos</h2>
                    <hr></hr>
                    <ul>
                        <li>Componentes funcionales y de clase</li>
                        <li>Uso de <b>React hooks</b> como useState y useEffect</li>
                        <li>Creacion de <b>Custom Hooks</b> como useForm</li>
                        <li>Gestion de variables de estado con <b>useState</b></li>
                        <li>Gestion de estado global con <b>Redux</b></li>
                        <li>Integracion de <b>Redux</b> con <b>React</b></li>
                        <li>Manejo de <b>Formularios</b> en <b>React</b></li>
                        <li>Publicando nuestra <b>Pagina</b> con <b>Github Pages</b></li>
                    </ul>
                </section>
                <section className="recursos">
                    <h2>Recursos Adicionales</h2>
                    <hr></hr>
                    <p>
                        Para profundizar en los temas cubiertos, consulta los siguientes recursos:
                    </p>
                </section>
            </main>
            <footer>
                <p>
                    © 2024 Modulo 7. USIP.
                </p>
            </footer>
        </div>
    );
}

export default LandingPage;