import { SET_PRODUCT_ELEMENT_FORM } from "../../constants/types"


export default function reducer(state, action) {
    switch (action.type) {

        case SET_PRODUCT_ELEMENT_FORM:
            return { ...state, productElementForm: action.payload }
        default:
            return state
    }
}
