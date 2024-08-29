const LandingPage = () => {
    return (
        <div className="LandingContainer">
            <main>
                <div>
                    <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
                </div>
                <section>
                    <h2>Bienvenido</h2>
                    <p>
                        Este modulo se centra en el uso de React, incluyendo la creacion de componentes, el manejo de hooks, y el uso de Redux
                    </p>
                </section>
                <section>
                    <h2>Temas Cubiertos</h2>
                    <ul>
                        <li>Componentes funcionales y de clase</li>
                        <li>Uso de React hooks como UseState y UseEffect</li>
                        <li>Creacion de Custom Hooks como useForm</li>
                        <li>Gestion de variables de estado con useState</li>
                        <li>Gestion de estado global con Redux</li>
                        <li>Integracion de Redux con React</li>
                        <li>Manejo de formularios en React</li>
                        <li>Publicando nuestra pagina con Github Pages</li>
                    </ul>
                </section>
                <section>
                    <h2>Recursos Adicionales</h2>
                    <p>
                        Para profundizar en los temas cubiertos, consulta los siguientes recursos
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