import { useCallback, useReducer } from 'react'
import { SET_PRODUCT_ELEMENT_FORM } from '../../constants/types'
import FormContext from './formContext'
import reducer from './policiesReducer'

const initialState = {
    productElementForm: {
        name: '',
        description: '',
        quantity: '',
        image: ''
    }
}

export default function FormState(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const setProductElementFormValues = useCallback((values) => {
        dispatch({
            type: SET_PRODUCT_ELEMENT_FORM,
            payload: values,
        });
    }, [])



    return (
        <FormContext.Provider
            value={{
                productElementForm: state.productElementForm,
                setProductElementFormValues
            }}
        >
            {props.children}
        </FormContext.Provider>
    )
}
