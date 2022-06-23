/**
 * Ejemplo para entender el uso de props.children
 */

import React from "react";

export default function Ejemplo4(props) {
    return (
        <div>
            <h1>*** Ejemplo de children props ***</h1>
            <h2>Nombre: {props.nombre}</h2>
            {props.children}
        </div>
    );
}
