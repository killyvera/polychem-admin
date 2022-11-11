import { useCallback, useReducer } from "react";
import {
  SET_PRODUCT_ELEMENT_FORM,
  SET_PRODUCT_FORM,
  SET_PRODUCTION_FORM,
  SET_LEADER_PRODUCTION,
  SET_DATE_RANGE,
} from "../../constants/types";
import {
  saveProduct,
  saveForm,
  saveProductFormulaElement,
} from "../../services/FormServices";
import FormContext from "./formContext";
import reducer from "./formReducer";

const initialState = {
  productElementForm: [
    // {
    //   name: "",
    //   description: "",
    //   quantity: null,
    //   image: "",
    //   productID: "",
    // },
  ],
  productForm: {
    name: "",
    description: "",
    formulaElements: [],
  },
  leaderProduction: {
    Attributes: [],
    Enabled: false,
    UserCreateDate: new Date(),
    UserLastModifiedDate: new Date(),
    UserStatus: "",
    Username: "",
  },
  production: {
    expectedPackages: 0,
    expectedPallets: 0,
    expectedUnits: 0,
    name: "",
    product: "",
  },
  dateRange: [],
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

  const setProduction = useCallback(async (values) => {
    dispatch({
      type: SET_PRODUCTION_FORM,
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
        production: state.production,
        dateRange: state.dateRange,
        setProductElementFormValues,
        setDateRange,
        setProductFormValues,
        submitForm,
        setProduction,
        setleaderProduction,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}
