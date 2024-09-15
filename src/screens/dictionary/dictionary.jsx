import ModalTraslate from "../../components/ModalTraslate";
import { useSelector, useDispatch } from "react-redux";
import { addWord } from "../../redux/dictionary/dictionaryActions";
import { deleteWord } from "../../redux/dictionary/dictionaryActions";
import { useState } from "react";


const Dictionary = () => {
    const [showModalAnadir, setShowModalAnadir] = useState(false);
    const [showModalEliminar, setShowModalEliminar] = useState(false);
    const [showModalTraducir, setShowModalTraducir] = useState(false);

    const [nuevaPalabra, setnuevaPalabra] = useState({ espanol: '', ingles: '', portugues: '' });
    const [eliminarPalabra, setEliminarPalabra] = useState('');
    const [palabraATraducir, setPalabraATraducir] = useState('');
    const [traduccion, setTraduccion] = useState('');

    const dictionary = useSelector(state => state.dictionary.dictionary);
    const dispatch = useDispatch();

    const hideModalTraducir = () => {
        setShowModalTraducir(false);
    };
    const hideModalAnadir = () => {
        setShowModalAnadir(false);
    };
    const hideModalEliminar = () => {
        setShowModalEliminar(false);
    };

    const handleAddWord = () => {
        if (nuevaPalabra.espanol && nuevaPalabra.ingles && nuevaPalabra.portugues) {
            dispatch(addWord(nuevaPalabra));
            setnuevaPalabra({ espanol: '', ingles: '', portugues: '' });
            hideModalAnadir();
            console.log(nuevaPalabra);
        } else {
            alert("Completa los campos");
        }
        
    };

    const handleDeleteWord = () => {
        if (eliminarPalabra.trim() !== '') {
            console.log(eliminarPalabra);
            dispatch(deleteWord(eliminarPalabra.trim()));
            setEliminarPalabra('');
            hideModalEliminar();
        } else {
            alert("Completa los campos");
        }
        
    };

    const handleTranslateWord = () => {
        const palabra = palabraATraducir.trim();
        const palabraEncontrada = dictionary.find(word =>
            word.espanol === palabra ||
            word.ingles === palabra ||
            word.portugues === palabra
        );
        console.log(palabra, palabraEncontrada)
        if (palabraEncontrada) {
            setTraduccion(`
                Español: ${palabraEncontrada.espanol}
                Ingles: ${palabraEncontrada.ingles}
                Portugues: ${palabraEncontrada.portugues}
            `);
        } else {
            setTraduccion("Palabra no encontrada en el diccionario");
        }
    }

    return (
         
        <div className="dictionary">
            <header className="navbar-dic">
                <div className="nav-buttons">
                    <button className="icon">
                        <svg class="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                        </svg>
                    </button>
                    <button className="icon">
                        <svg class="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </button>
                    <button className="icon">
                        <svg class="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </button>
                    <button className="icon">
                        <svg class="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                        </svg>
                    </button>
                </div>
                <input
                    type="text"
                    className="urlbar-dic"
                    value="https://carollanos.github.io/desarrollo-frontend-react-m7/dictionary" />
                <button className="search-icon-dic">
                    <svg class="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </header>
            
            <main className="content-dic">
                <h1 style={{ fontSize: 'xx-large', fontWeight: 'bold'}}>DICTIONARY USIP</h1>
                <p>Este <span style={{ fontWeight: 'bold', fontSize: 'larger'}}>modulo (diccionario)</span> corresponde <span style={{ fontSize: 'x-large'}}>al recuperatorio del</span> <span style={{ color: 'red', fontWeight: 'bold', fontSize: 'larger' }}>modulo-7</span> ReactJS. <span style={{fontSize: 'x-large'}}>URL:</span> https://carollanos.github.io/desarrollo-frontend/dictionary</p>
                
                <div className="button-group">
                    <button className="dictionary-button" onClick={() => setShowModalAnadir(true)}>Agregar Palabra</button>
                    <button className="dictionary-button" onClick={() => setShowModalEliminar(true)}>Eliminar Palabra</button>
                </div>
                <button className="traslate-button" onClick={() => setShowModalTraducir(true)}>Traducir</button>

            </main>
            <footer className="footer-dic">
            </footer>

            <ModalTraslate
                visible={showModalAnadir}
                onClose={hideModalAnadir}
            >
                <div className="modal-traslate">Modal Anadir Palabra</div>
                <form className="form-traslate">
                    <br></br>
                    <label className="form-traslate-label">
                        Español:
                        <input className="form-traslate-input" type="text" name="espanol" id="espanol" value={nuevaPalabra.espanol} onChange={(e) => setnuevaPalabra({ ...nuevaPalabra, espanol: e.target.value })}
                        />
                    </label>
                    <br></br>
                    <label className="form-traslate-label">
                        Inglés:
                        <input className="form-traslate-input" type="text" name="ingles" id="ingles" value={nuevaPalabra.ingles} onChange={(e) => setnuevaPalabra({ ...nuevaPalabra, ingles: e.target.value })}
                        />
                    </label>
                    <br></br>
                    <label className="form-traslate-label">
                        Portugués:
                        <input className="form-traslate-input" type="text" name="portugues" id="portugues" value={nuevaPalabra.portugues} onChange={(e) => setnuevaPalabra({ ...nuevaPalabra, portugues: e.target.value })}
                        />
                    </label>
                    <br></br>
                    <button className="dictionary-button" type="button" onClick={handleAddWord}>Agregar</button>
                </form> 
            </ModalTraslate>

            <ModalTraslate
            visible={showModalEliminar}
            onClose={hideModalEliminar}      
            >
                <div className="modal-traslate">Modal Eliminar Palabra</div>
                <p>Que palabra deseas eliminar del diccionario?</p>
                <p>Puede escribir su palabra en ESPANOL, INGLES O PORTUGUES</p>
                <div>
                    <label>Palabra:</label>
                    <input className="form-traslate-input" type="text" id="palabraAEliminar" name="palabraAEliminar" value={eliminarPalabra} onChange={(e) => setEliminarPalabra(e.target.value)}
                    />
                </div>
                <br></br>
                <button className="dictionary-button" type="button" onClick={handleDeleteWord}>Eliminar</button>
            
            </ModalTraslate>
            <ModalTraslate
            visible={showModalTraducir}
            onClose={hideModalTraducir}      
            >
                <div className="modal-traslate">Modal Traducir Palabra</div>
                <p>Que palabra desea traducir en el diccionario?</p>
                <p>Agregue su palabra y despues el idioma de traduccion</p>
                <div>
                    <label>Palabra a traducir:</label>
                    <input className="form-traslate-input" type="text" id="palabraTraducida" name="palabraTraducida" value={palabraATraducir} onChange={(e) => setPalabraATraducir(e.target.value)}
                    />
                </div>
                <div>
                    {/*<label>Idioma de Traduccion</label>
                    <select id="language">
                        <option>Ingles</option>
                        <option>Espanol</option>
                        <option>Portugues</option>
                    </select>*/}
                </div>
                <br></br>
                <div>
                    <textarea className="form-traslate-textarea" readOnly value={traduccion}></textarea>
                </div>
                <br></br>
                <button className="traslate-button" type="button" onClick={handleTranslateWord}>Traducir</button>
            </ModalTraslate>
        </div>

    )
}

export default Dictionary;