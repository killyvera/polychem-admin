import { DataStore } from '@aws-amplify/datastore';
import { Form } from '../models';

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