import React from "react";
import { User } from "../../../models/user.class";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
    let user = new User();

    const initialValues = {
        username: "",
        email: "",
        password: " ",
        confirm: "",
        role: ROLES.USER,
    };

    const registerSchema = Yup.object().shape({
        username: Yup.string()
            .min(6, "Username too short")
            .max(12, "Username too long")
            .required("Username is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .matches(``)
            .min(8, "Password too short"),
        confirm: Yup.string()
            .when("password", {
                is: (value) => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "¡Passwords must match!"
                ),
            })
            .required("You must confirm the password"),
    });

    const submit = () => {};

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterFormik;
