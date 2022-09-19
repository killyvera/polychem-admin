import React, { useContext } from 'react'
import { useFormik } from 'formik';
import { UsersContext } from '../contexts/UsersContext'

export const UserForm = () => {
    const {addUser} = useContext(UsersContext)
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            phone_number: '',
            name: '',
            email: '',
        },
        onSubmit: values => {
            const phone_number = values.phone_number
            const email = values.email
            const name = values.name
            addUser(phone_number, name)
            console.log(phone_number, email, name)
        },
    });
    return (
        <>
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
                <label htmlFor="email">Celular</label>

                <input
                    id="phone_number"
                    name="phone_number"
                    type="phone_number"
                    onChange={formik.handleChange}
                    value={formik.values.phone_number}
                />


                <button type="submit">Submit</button>
            </form>
        </>
    );
};