import { DataStore } from "@aws-amplify/datastore";
import { Form, FormulaElement, Product, Production } from "../models";

export const getForms = async () => {
  const forms = await DataStore.query(Form);
  return forms;
};

export const createForm = async (name) => {
  await DataStore.save(
    new Form({
      name: name,
    })
  );
};

export const saveProductFormulaElement = async ({
  name,
  description,
  quantity,
  productID,
}) => {
  const response = await DataStore.save(
    new FormulaElement({
      name: name,
      description: description,
      quantity: quantity,
      productID: productID,
    })
  );
};

export const saveProduct = async ({ name, description, formulaElements }) => {
  const response = await DataStore.save(
    new Product({
      name: name,
      description: description,
      FormulaElements: formulaElements,
    })
  );
  console.log({ response });
};

export const saveProduction = async ({
  name,
  expectedUnits,
  expectedPackages,
  expectedPallets,
}) => {
  const response = await DataStore.save(
    new Production({
      name: name,
      expectedUnits: expectedUnits,
      expectedPackages: expectedPackages,
      expectedPallets: expectedPallets,
    })
  );
  console.log({ response });
};

// export const saveForm = async ({
//   name,
//   description,
//   planned,
//   schedule,
//   sent,
//   expire,
//   expirationDate,
//   active,
//   scheduledID,
//   leadProduction,
//   production,
// }) => {
export const saveForm = async (values) => {
  console.log("before form submit in service", values);
  const {
    name,
    description,
    planned,
    schedule,
    sent,
    expire,
    expirationDate,
    active,
    production,
    leadProduction,
    scheduledID,
  } = values;
  const prod = new Production({
    name: production.name,
    expectedUnits: production.expectedUnits,
    expectedPackages: production.expectedPackages,
    expectedPallets: production.expectedPallets,
  });
  const response = await DataStore.save(
    new Form({
      name: name,
      description: description,
      planned: planned,
      schedule: schedule,
      sent: sent,
      expire: expire,
      expirationDate: expirationDate,
      active: active,
      Production: prod,
      leadProduction: leadProduction,
      sheduledID: scheduledID,
    })
  );
};
