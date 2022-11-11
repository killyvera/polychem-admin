import {
  SET_PRODUCT_ELEMENT_FORM,
  SET_PRODUCT_FORM,
  SET_PRODUCTION_FORM,
  SET_LEADER_PRODUCTION,
  SET_DATE_RANGE,
} from "../../constants/types";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_PRODUCT_ELEMENT_FORM:
      const existingProductFormulaElements = state.productElementForm;
      const updatedProductFormulaElements = [
        ...existingProductFormulaElements,
        action.payload,
      ];
      return { ...state, productElementForm: updatedProductFormulaElements };

    case SET_PRODUCT_FORM:
      return { ...state, productForm: action.payload };

    case SET_PRODUCTION_FORM:
      return { ...state, production: [...state.production, action.payload] };

    case SET_LEADER_PRODUCTION:
      return { ...state, leaderProduction: action.payload };

    case SET_DATE_RANGE:
      return { ...state, dateRange: action.payload };

    default:
      return state;
  }
}
