import { useCallback, useReducer } from 'react'
import { SET_PRODUCT_ELEMENT_FORM, SET_PRODUCT_FORM } from '../../constants/types'
import { saveProduct, saveProductFormulaElement } from '../../services/FormServices'
import FormContext from './formContext'
import reducer from './formReducer'

const initialState = {
    productElementForm: [{
        name: '',
        description: '',
        quantity: null,
        image: '',
        productID: ''
    }],
    productForm: {
        name: '',
        description: '',
        formulaElements: []
    }
}

export default function FormState(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const setProductElementFormValues = useCallback(async (values) => {
        await saveProductFormulaElement(values);
        dispatch({
            type: SET_PRODUCT_ELEMENT_FORM,
            payload: values,
        });
    }, [])

    const setProductFormValues = useCallback(async (values) => {
        console.log({ values })
        await saveProduct(values);
        dispatch({
            type: SET_PRODUCT_FORM,
            payload: values,
        });
    }, [])



    return (
        <FormContext.Provider
            value={{
                productElementForm: state.productElementForm,
                setProductElementFormValues,
                setProductFormValues
            }}
        >
            {props.children}
        </FormContext.Provider>
    )
}
