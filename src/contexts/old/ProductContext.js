import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
