import React from "react";
import PropTypes from "prop-types";
import ContactComponent from "../pure/contact";
import { Contact } from "../../models/contact.class";

const ContactListComponent = () => {
    const newContact = new Contact(
        "César",
        "Freydell",
        "cfreydell@gmail.com",
        true
    );
    return (
        <div>
            <ContactComponent contact={newContact} />
        </div>
    );
};

ContactListComponent.propTypes = {};

export default ContactListComponent;
