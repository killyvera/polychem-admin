import { SET_PRODUCT_ELEMENT_FORM, SET_PRODUCT_FORM } from "../../constants/types"


export default function reducer(state, action) {
    switch (action.type) {

        case SET_PRODUCT_ELEMENT_FORM:
            const existingProductFormulaElements = state.productElementForm;
            const updatedProductFormulaElements = [...existingProductFormulaElements, action.payload]
            return { ...state, productElementForm: updatedProductFormulaElements }

        case SET_PRODUCT_FORM:
            return { ...state, productForm: action.payload }

        default:
            return state
    }
}
