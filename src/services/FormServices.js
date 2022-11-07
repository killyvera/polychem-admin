import { DataStore } from '@aws-amplify/datastore';
import { Form, FormulaElement, Product } from '../models';

export const getForms = async () => {
    const forms = await DataStore.query(Form)
    return forms
}

export const createForm = async (name) => {
    await DataStore.save(
        new Form({
            "name": name
        })
    );
}


export const saveProductFormulaElement = async ({ name, description, quantity, productID }) => {
    console.log({ name, description, quantity, productID })
    const response = await DataStore.save(
        new FormulaElement({
            "name": name,
            "description": description,
            "quantity": quantity,
            "productID": productID,
        })
    );
    console.log({ response })
}

export const saveProduct = async ({ name, description, formulaElements }) => {
    console.log({ name, description, formulaElements })
    const response = await DataStore.save(
        new Product({
            "name": name,
            "description": description,
            "FormulaElements": formulaElements
        })
    );
    console.log({ response })
}
