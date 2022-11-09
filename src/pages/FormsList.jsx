import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Form } from "../models";
import { createForm } from "../services/FormServices";
import { ProductFormulaElement } from "./../components/ProductFormulaElement";
import { ProductForm } from "../components/ProductForm";
import { CreateForm } from "../components/CreateForm";
import AddLeaderProduction from "../components/addLeaderProduction";
import ProductionFrom from "../components/ProductionFrom";

//const todelete = await DataStore.query(Post, '1234567');
//DataStore.delete(todelete);
export function FormsList(props) {
    const [forms, setForms] = useState([]);
    const [formName, setFormName] = useState("");

    const fetchForms = async () => {
        const forms = await DataStore.query(Form);
        console.log({ forms });
        setForms(forms);
    };

    useEffect(() => {
        fetchForms();
        const subscription = DataStore.observe(Form).subscribe(() => fetchForms());
        return () => subscription.unsubscribe();
    }, []);

    return (
        <div>
            {/* <div style={{ marginTop: '100px' }} >Formularios Produccion</div>
            <form>
                <label>Nombre de formulario:
                    <input
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={(e) => createForm(formName)} >
                Crear Formulario
            </button>
            <div>
                {forms.map((form, index) => (
                    <div key={index} >
                        {form.name}
                        <p>
                            {form.expiration_date}
                        </p>
                    </div>
                ))}
            </div> */}
            {/* <ProductFormulaElement /> */}
            <ProductForm />
            {/* <CreateForm /> */}
            {/* <AddLeaderProduction /> */}
            {/* <ProductionFrom /> */}
        </div>
    );
}
