import React, { createContext, useEffect, useState } from "react";
import { saveForm } from "../services/FormServices";
export const AdminFormContext = createContext();

export const AdminFormContextProvider = (props) => {
  const [dateRange, setDateRange] = React.useState([]);
  const [leaderProduction, setLeaderProduction] = useState({});
  const [production, setProduction] = useState({});
  const submitForm = (values) => {
    saveForm(values);
  };
  console.log("dateRange", dateRange);
  console.log("leaderProduction", leaderProduction);
  console.log("production", production);
  return (
    <AdminFormContext.Provider
      value={{
        dateRange,
        leaderProduction,
        production,
        setProduction,
        setLeaderProduction,
        setDateRange,
        submitForm,
      }}
    >
      {props.children}
    </AdminFormContext.Provider>
  );
};
