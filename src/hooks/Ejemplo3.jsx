/**
 * Ejemplo Hooks:
 * useState()
 * useContext()
 */

import React, { createContext, useContext, useState } from "react";

/**
 *
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */

const miContexto = createContext(null);

const Componente1 = () => {
    const state = useContext(miContexto);

    return (
        <div>
            <h1>El Token es: {state.token}</h1>
            <Componente2 />
        </div>
    );
};

const Componente2 = () => {
    const state = useContext(miContexto);

    return (
        <div>
            <h2>La sesión es: {state.sesion}</h2>
        </div>
    );
};

export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: "1234567",
        sesion: 1,
    };

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSession() {
        setSessionData({
            token: "JWT123456789",
            sesion: sessionData.sesion + 1,
        });
    }

    return (
        <miContexto.Provider value={sessionData}>
            <Componente1 />
            <button onClick={actualizarSession}>Actualizar sesion</button>
        </miContexto.Provider>
    );
}
