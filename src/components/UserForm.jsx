import React, { useContext } from 'react'
import { useFormik } from 'formik';
import { UsersContext } from '../contexts/UsersContext'

export const UserForm = () => {
    const { addUser } = useContext(UsersContext)
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            puesto: '',
            departamento: ''
        },
        onSubmit: values => {
            const email = values.email
            const name = values.name
            const puesto = values.puesto
            const departamento = values.departamento
            addUser(email, name, puesto, departamento)
            console.log(email, name, puesto, departamento)
            formik.resetForm()
        },
    });
    return (
        <div style={{backGroundColor:'red'}} >
            <h1 style={{ paddingTop: '100px' }} >Agregar Usuario</h1>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="name">Nombre</label>
                <input
                    id="name"
                    name="name"
                    type="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <label htmlFor="email">Em@il</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <label htmlFor="puesto">Puesto</label>
                <input
                    id="puesto"
                    name="puesto"
                    type="puesto"
                    onChange={formik.handleChange}
                    value={formik.values.puesto}
                />

                <label htmlFor="departamento">Departamento</label>
                <input
                    id="departamento"
                    name="departamento"
                    type="departamento"
                    onChange={formik.handleChange}
                    value={formik.values.departamento}
                />


                <button type="submit">Submit</button>
            </form>
        </div>
    );
};