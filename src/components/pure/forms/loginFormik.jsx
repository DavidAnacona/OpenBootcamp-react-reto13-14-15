import React from 'react';
import {Formik, Field, Form, ErrorMessage} from "formik"
import * as Yup from "yup"


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email("El formato del email es incorrecto")
                .required("El email es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria"),
    }
)

const LoginFormik = () => {
    const initialCredentials = {
        email: "",
        password: ""
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik 
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) =>{
                    await new Promise((r) => setTimeout(r,1000));
                    alert(JSON.stringify(values, null, 2));
                    // Guardando informacion en el navegador
                    localStorage.setItem("credentials", values)
                }}
            >
                {/**  We obtain props from Formik*/}

                {({errors, touched, isSubmitting, values, handleBlur, handleChange}) =>(
                    <Form>
                        <label htmlFor="email">Email: </label>
                        <Field id="email" name="email" placeholder="Example@email.com" type="email"/>

                        {/* Capturando y mostrando errores en el campo de email */}
                        {
                            errors.email && touched.email && (
                                <ErrorMessage name="email" component="div" />                                
                            )
                        }

                        <label htmlFor="password">Password: </label>
                        <Field id="password" name="password" placeholder="password" type="password" />

                        {/* Capturando y mostrando errores en el campo de password */}
                        {
                            errors.password && touched.password && (
                                <ErrorMessage name="password" component="div" />
                            )
                        }

                        <button type="submit">Login</button>

                        {
                            isSubmitting ? (<p>Login your credentials...</p>) : null
                        }
                    </Form>
                )}
                
                    {/*props => {
                        const {
                            values, //Valor en cada momento
                            touched, // Saber que campos el usuario ha tocado
                            errors, // Si existe un error
                            isSubmitting, // Si se esta enviando, si se ha enviado o no
                            handleChange, // cambio en algun cambio
                            handleBlur // Cambio de foco en algun momento
                        } = props;
                    }*/}
                
            </Formik>
        </div>
    );
}

export default LoginFormik;
