import React, { useState } from "react";

const loggedStyled = {
    color: "white",
};

const unloggedStyled = {
    color: "tomato",
    fontWeight: "bold",
};

const GreetingStyled = (props) => {
    const [logged, setLogged] = useState(false);

    // const greetingUser = () => <p>Hola, {props.name}!</p>;
    // const pleaseLogin = () => <p>Please login</p>;

    // const GreetingUser = () => {
    //     return <p>Hola, {props.name}!</p>;
    // };
    // const PleaseLogin = () => {
    //     return <p>Please login</p>;
    // };

    return (
        <div style={logged ? loggedStyled : unloggedStyled}>
            {/* {logged ? <GreetingUser /> : <PleaseLogin />} */}
            {/* {logged ? greetingUser() : pleaseLogin()} */}

            {logged ? <p>Hola, {props.name}!</p> : <p>Please login</p>}

            <button
                onClick={() => {
                    setLogged(!logged);
                }}
            >
                {logged ? "Logout" : "Login"}
            </button>
        </div>
    );
};

export default GreetingStyled;
