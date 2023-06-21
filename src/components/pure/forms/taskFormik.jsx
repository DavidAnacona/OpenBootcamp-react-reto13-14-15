import React from 'react';
import { Levels } from '../../../models/levels.enum';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const TaskFormik = () => {

    const initialValues = {
        name: "",
        description: "",
        completed: "false",
        level: Levels.NORMAL
    }

    const createTaskSchema = Yup.object().shape(
        {
            name: Yup.string().required("El nombre de la tarea es obligatoria"),
            description: Yup.string().min( 8, "Describe bien tu tarea").required("La descripcion de la tarea es obligatoria"),
            level: Yup.string().oneOf([Levels.NORMAL, Levels.URGENT, Levels.BLOCKING], "Debes seleccionar una prioridad para tu tarea").required("La prioridad es obligatoria")
        }
    )

    return (
        <div>
            <h4>Crea una tarea</h4>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r,1000));
                    alert(JSON.stringify(values, null, 2))
                }}
                validationSchema={createTaskSchema}
            >
            {({errors, touched, isSubmitting, values }) => (
                <Form>
                    <label htmlFor="name">Nombre tarea: </label>
                    <Field id="name" name="name" type="text" placelhoder="Nombre de tu tarea"></Field>
                    {
                        errors.name && touched.name && (
                            <ErrorMessage name="name" component="div" />
                        )
                    }

                    <label htmlFor="description">Descripción: </label>
                    <Field id="description" name="description" type="text" placelhoder="Describe tu tarea"></Field>
                    {
                        errors.description && touched.description && (
                            <ErrorMessage name="description" component="div" />
                        )
                    }

                    <Field as="select" name="level">
                        <option value={Levels.NORMAL}>Normal</option>
                        <option value={Levels.URGENT}>Urgente</option>
                        <option value={Levels.BLOCKING}>Bloqueante</option>
                    </Field>
                    {
                        errors.level && touched.level && (
                            <ErrorMessage name="level" component="div" />
                        )
                    }

                    <button type='submit'>Crear tarea</button>
                    {
                        isSubmitting ? (<p>Creando tu tarea......</p>) : null
                    }

                </Form>
            )}
            </Formik>
        </div>
    );
}

export default TaskFormik;
