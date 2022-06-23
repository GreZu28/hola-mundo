/**
 * Ejemplo de uso del hook useState
 *
 * Crear componente de tipo función y acceder a estado privado a través de un hook y, *además, poder modificarlo
 */

import React, { useState } from "react";

const Ejemplo1 = () => {
    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: "Grecia",
        email: "gz.alvabermejo@gmail.com",
    };
    /**
     * Queremos que valorInicial y personal sean parte del estado del componente para así poder gestionar su cambio y que este sea vea reflejado en la vista
     *
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        setContador(contador + 1);
    }

    /**
     * Función para actualizar el estado de persona en el componente
     */
    function actualizarPersona() {
        setPersona({
            nombre: "Zuleima",
            email: "greece.ab.7@gmail.com",
        });
    }
    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3>
            {/** Bloque de botones para actualizar el estado */}
            <div>
                <button onClick={incrementarContador}>
                    Incrementar contador
                </button>
                <button onClick={actualizarPersona}>Actualizar persona</button>
            </div>
        </div>
    );
};

export default Ejemplo1;
