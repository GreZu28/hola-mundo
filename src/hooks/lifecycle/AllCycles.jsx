import React, { useEffect } from "react";

const AllCycles = () => {
    useEffect(() => {
        console.log("Componentes creado");
        const intervalID = setInterval(() => {
            document.title = `${new Date()}`;
            console.log("Actualizacion del componente");
        }, 1000);
        return () => {
            console.log("Componentes va a desparecer");
            document.title = "Tiempo detenido";
            clearInterval(intervalID);
        };
    }, []);

    return <div></div>;
};

export default AllCycles;
