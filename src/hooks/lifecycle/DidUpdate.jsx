/**Ejemplo de uso del metodo DidUpdate en componente clase y en componente funcional */

import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
    componentDidUpdate() {
        console.log(
            "Comportamiento después de actualizarse (por nuevas props o cambio en el estado)"
        );
    }
    render() {
        return (
            <div>
                <h1>DidUpdate desde Clase</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log(
            "Comportamiento después de actualizarse (por nuevas props o cambio en el estado)"
        );
    });
    return (
        <div>
            <h1>DidUpdate desde Función</h1>
        </div>
    );
};
