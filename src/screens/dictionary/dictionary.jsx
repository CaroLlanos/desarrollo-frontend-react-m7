const Dictionary = () => {
    return (
        <div className="dictionary">
        <header className="navbar-dic">
            <div className="nav-buttons">     
                <button className="icon">
                    <svg class="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                    </svg>
                </button>
                <button className="icon">
                    <svg class="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </button>
                <button className="icon">
                    <svg class="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                </button>
                <button className="icon">
                   <svg class="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                    </svg>
                </button>
            </div>
            <input 
                type="text" 
                className="urlbar-dic" 
                value="https://carollanos.github.io/desarrollo-frontend-react-m7"/>
                <button className="search-icon-dic">
                    <svg class="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
            </button>
        </header>
            
        <main className="content-dic">
            <h1>DICTIONARY USIP</h1>
                <p>Este <span style={{ fontWeight: 'bold' }}>modulo (diccionario)</span> corresponde <span>al recuperatorio del</span> <span style={{ color: 'red', fontWeight: 'bold' }}>modulo-7</span> ReactJS. URL: https://carollanos.github.io/desarrollo-frontend/dictionary</p>
                
            <div className="button-group">   
                <button className="dictionary-button">Agregar palabra</button>
                <button className="dictionary-button">Eliminar palabra</button>
            </div>
                <button className="traslate-button">Traducir</button>

        </main>
        </div>
    )
}

export default Dictionary;