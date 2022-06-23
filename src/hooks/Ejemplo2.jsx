/**
 * Ejemplo de uso de:
 * useState()
 * useEffect()
 * useRef()
 */

import React, { useEffect, useRef, useState } from "react";

const Ejemplo2 = () => {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM
    const myRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect()
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente se ejecuta lo que está dentro de useEffect
     */

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
    //     console.log("Mostrando referencia a elemento del DOM");
    //     console.log(myRef);
    // });

    /**
     * ? Caso 2: SOLO CUANDO CAMBIA CONTADOR 1
     */

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1");
    //     console.log("Mostrando referencia a elemento del DOM");
    //     console.log(myRef);
    // }, [contador1]);

    /**
     * ? Caso 3: SOLO CUANDO CAMBIA CONTADOR 1 o CONTADOR 2
     */

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1");
    //     console.log("Mostrando referencia a elemento del DOM");
    //     console.log(myRef);
    // }, [contador1, contador2]);

    /**
     * ? Caso 4: Solo se ejecuta la primera vez que se renderiza
     */
    useEffect(() => {
        console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
        console.log("Mostrando referencia a elemento del DOM");
        console.log(myRef);
    }, []);

    return (
        <div>
            <h1>*** Ejemplo de useRef() y useEffect()***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/**Elemento referenciado */}
            <h4 ref={myRef}>Ejemplo de elemento referenciado</h4>
            {/** Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
};

export default Ejemplo2;
