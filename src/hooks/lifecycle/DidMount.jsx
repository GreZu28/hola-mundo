/**Ejemplo de uso del metodo de ciclo de vida en componente clase y en componente funcional */

import React, { Component, useEffect } from "react";

export class DidMount extends Component {
    componentDidMount() {
        console.log("Comportamiento antes de renderizado");
    }
    render() {
        return (
            <div>
                <h1>DidMount desde Clase</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {
    useEffect(() => {
        console.log("Comportamiento antes de renderizado");
    }, []);
    return (
        <div>
            <h1>DidMount desde Función</h1>
        </div>
    );
};
