import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

//Models 
import {User} from "../../../models/user.class"
import { Roles } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        role: Roles.USER
    }

    const registerSchema =  Yup.object().shape(
        {
            username: Yup.string()
                    .min(6, "Username muy corto")
                    .max(12, "Username muy largo")
                    .required("Username es obligatorio"),
            email: Yup.string()
                    .email("El formato del email es incorrecto")
                    .required("El email es obligatorio"),
            role: Yup.string().oneOf(
                [Roles.USER, Roles.ADMIN], "Debes de seleccionar un rol ya creado"
            ).required("El rol es obligatorio"),
            password: Yup.string()
                    .min(8, "Contraseña muy corta")
                    .required("Contraseña es obligatoria"),
            confirm: Yup.string()
                    .when("password", {
                        is: value => (value && value.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            "Las contraseñas no coinciden!"
                        )
                    }).required("La confirmación de la contraseña es obligatoria")
        }
    )

    const submit = (values) => {
        console.log("Register user")
    }
    return (
        <div>
            <h4>Formulario de registro</h4>
            <Formik 
                initialValues={initialValues}
                onSubmit={async (values) =>{
                    await new Promise((r) => setTimeout(r,1000));
                    alert(JSON.stringify(values, null, 2));
                    // Guardando informacion en el navegador
                    localStorage.setItem("credentials", values)
                }}
                validationSchema={registerSchema}
            >
            {({ values, touched, errors, isSubmitting, handleChange, handleBlur}) => (
                <Form>
                    <label htmlFor="username">Usuario: </label>
                    <Field id="username" name="username" placeholder="Tu usuario" type="text"/>

                    {
                        errors.username && touched.username && (
                            <ErrorMessage name='username' component="div"></ErrorMessage>
                        )
                    }

                    <label htmlFor="email">Email: </label>
                    <Field id="email" name="email" placeholder="Example@email.com" type="email"/>
                    {
                        errors.email && touched.email && (
                            <ErrorMessage name="email" component="div" />                                
                        )
                    }
                    
                    <label htmlFor="password">Contraseña: </label>
                    <Field id="password" name="password" placeholder="Contraseña" type="password" />

                    {
                        errors.password && (
                            <ErrorMessage name="password" component="div" />
                        )
                    }

                    <label htmlFor="confirm">Confirmar contraseña: </label>
                    <Field id="confirm" name="confirm" placeholder="Confirma tu contraseña" type="password" />

                    {
                        errors.confirm && (
                            <ErrorMessage name="confirm" component="div" />
                        )
                    }

                    <button type="submit">Registrar usuario</button>

                    {
                        isSubmitting ? (<p>Login your credentials...</p>) : null
                    }

                </Form>
            )
            }

            </Formik>
        </div>
    );
}

export default RegisterFormik;
