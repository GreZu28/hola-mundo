import React, { useState } from "react";

const LoginButton = ({ loginAction }) => {
    return <button onClick={loginAction}>Logout</button>;
};

const LogoutButton = ({ logoutAction }) => {
    return <button onClick={logoutAction}>Login</button>;
};

const OptionalRender = () => {
    const [access, setAccess] = useState(true);

    const loginAction = () => {
        setAccess(!access);
    };

    const logoutAction = () => {
        setAccess(!access);
    };

    let optionalButton;

    if (access) {
        optionalButton = <LoginButton loginAction={loginAction} />;
    } else {
        optionalButton = <LogoutButton logoutAction={logoutAction} />;
    }

    return <div>{optionalButton}</div>;
};

export default OptionalRender;
