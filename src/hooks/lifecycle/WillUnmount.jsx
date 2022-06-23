/**Ejemplo de uso del metodo WillUnmount en componente clase y en componente funcional */

import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
    componentWillUnmount() {
        console.log("Comportamiento cuando el componente va a desaparecer");
    }
    render() {
        return (
            <div>
                <h1>WillUnmount desde Clase</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {
    useEffect(() => {
        // Aquí no va nada
        return () => {
            console.log("Comportamiento cuando el componente va a desaparecer");
        };
    }, []);
    return (
        <div>
            <h1>WillUnmount desde Función</h1>
        </div>
    );
};
