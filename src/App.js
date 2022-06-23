import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF";
import TaskListComponent from "./components/container/task_list";
import ContactListComponent from "./components/container/contact_list";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import GreetingStyled from "./components/pure/greetingStyled";
import Child from "./components/pure/child";
import Father from "./components/container/father";
import OptionalRender from "./components/pure/optionalRender";
import LoginFormik from "./components/pure/forms/loginFormik";

function App() {
    return (
        <div className="App">
            {/* <Greeting name="Grecia" /> */}
            {/* <GreetingF name="Keanu" /> */}
            {/* <ContactListComponent /> */}
            {/** Ejemplos de uso de hooks */}
            {/* <Ejemplo1 /> */}
            {/* <Ejemplo2 /> */}
            {/* <MiComponenteConContexto /> */}
            {/* <Ejemplo4 nombre="Keanu">
                    <h3>Contenido de props.children</h3>
                </Ejemplo4> */}
            {/* <GreetingStyled name={"Dioselina"} /> */}
            {/* <Father /> */}
            {/* <TaskListComponent /> */}
            {/** Ejemplos de renderizado condicional */}
            {/* <OptionalRender /> */}
            {/** Formik and Yup */}
            <LoginFormik />
        </div>
    );
}

export default App;
