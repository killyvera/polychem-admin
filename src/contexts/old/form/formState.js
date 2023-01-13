import { useCallback, useReducer } from "react";
import {
  SET_PRODUCT_ELEMENT_FORM,
  SET_PRODUCT_FORM,
  SET_PRODUCTION_FORM,
  SET_LEADER_PRODUCTION,
  SET_DATE_RANGE,
  SET_ISPRODUCTION_EDITABLE,
} from "../../constants/types";
import {
  saveProduct,
  saveForm,
  saveProductFormulaElement,
  saveProduction,
} from "../../services/FormServices";
import FormContext from "./formContext";
import reducer from "./formReducer";

const initialState = {
  productElementForm: [],
  productForm: {
    name: "",
    description: "",
    formulaElements: [],
  },
  leaderProduction: "",
  production: {},
  isProductionEditable: false,
};

export default function FormState(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setProductElementFormValues = useCallback(async (values) => {
    await saveProductFormulaElement(values);
    dispatch({
      type: SET_PRODUCT_ELEMENT_FORM,
      payload: values,
    });
  }, []);

  const submitForm = useCallback(async (values) => {
    await saveForm(values);
  }, []);

  const submitProductionForm = useCallback(async (values) => {
    await saveProduction(values);
  }, []);

  const setProduction = useCallback(async (values) => {
    dispatch({
      type: SET_PRODUCTION_FORM,
      payload: values,
    });
  }, []);

  const setIsProductionEditable = useCallback(async (values) => {
    dispatch({
      type: SET_ISPRODUCTION_EDITABLE,
      payload: values,
    });
  }, []);

  const setDateRange = useCallback(async (values) => {
    dispatch({
      type: SET_DATE_RANGE,
      payload: values,
    });
  }, []);

  const setleaderProduction = useCallback(async (values) => {
    dispatch({
      type: SET_LEADER_PRODUCTION,
      payload: values,
    });
  }, []);

  const setProductFormValues = useCallback(async (values) => {
    await saveProduct(values);
    dispatch({
      type: SET_PRODUCT_FORM,
      payload: values,
    });
  }, []);

  return (
    <FormContext.Provider
      value={{
        productElementForm: state.productElementForm,
        leaderProduction: state.leaderProduction,
        isProductionEditable: state.isProductionEditable,
        production: state.production,
        dateRange: state.dateRange,
        setProductElementFormValues,
        setDateRange,
        setProductFormValues,
        submitForm,
        setProduction,
        setleaderProduction,
        submitProductionForm,
        setIsProductionEditable,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}
