import { DataStore } from "@aws-amplify/datastore";
import { Product } from "../models";
export const getProducts = async () => {
  const products = await DataStore.query(Product);
  return products;
};
