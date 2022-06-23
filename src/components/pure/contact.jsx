import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>Name: {contact.name}</h2>
            <h3>Lastname: {contact.lastName}</h3>
            <h3>Email: {contact.email}</h3>
            <h3>
                State:{" "}
                {contact.conected ? "Online Contact" : "Contact Not Available"}
            </h3>
        </div>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
