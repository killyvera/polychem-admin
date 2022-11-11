import React, { createContext, useEffect, useState } from "react";
import { saveForm } from "../services/FormServices";
export const AdminFormContext = createContext();

export const AdminFormContextProvider = (props) => {
  const [dateRange, setDateRange] = React.useState([]);

  const submitForm = (values) => {
    saveForm(values);
  };

  return (
    <AdminFormContext.Provider
      value={{
        dateRange,
        setDateRange,
        submitForm,
      }}
    >
      {props.children}
    </AdminFormContext.Provider>
  );
};
