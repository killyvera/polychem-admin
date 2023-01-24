import { useEffect, createContext, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Product, FormulaElement, Form } from "../models";
import {
  usersList,
  deleteUser,
  editUser,
  createUser,
} from "../services/UserServices";

const initialDetails = () => ({
  users: [],
  popUser: () => {},
  updateUser: () => {},
  addUser: () => {},
  products: [],
  updateProducts: () => {},
  formulaElements: [],
  updateFormulaElements: () => {},
  formsList: [],
  updateFormsList: () => {},
});

export const AppContext = createContext(initialDetails());

export const AppContextProvider = (props) => {
  const [users, updateUsers] = useState([]);
  const [formsList, updateFormsList] = useState([]);
  const [products, updateProducts] = useState([]);
  const [formulaElements, updateFormulaElements] = useState([]);

  const addUser = (phone, email, name, perfil, puesto, departamento) => {
    createUser(phone, email, name, perfil, puesto, departamento)
      .then((res) => {
        getUsers();
      })
      .catch((error) => {
        console.log("DELETE USER ERROR: ", error);
      });
  };

  const updateUser = ({
    userId,
    phone,
    email,
    name,
    perfil,
    puesto,
    departamento,
  }) => {
    editUser(userId, phone, email, name, perfil, puesto, departamento)
      .then((res) => {
        getUsers();
      })
      .catch((error) => {
        console.log("DELETE USER ERROR: ", error);
      });
  };

  const popUser = (user) => {
    deleteUser(user)
      .then((res) => {
        getUsers();
      })
      .catch((error) => {
        console.log("DELETE USER ERROR: ", error);
      });
  };

  const getUsers = async () => {
    try {
      const allUsers = await usersList();
      const formattedUsers = allUsers.map((user) => ({
        id: user.Username,
        perfil: user.Attributes[0] ? user.Attributes[0].Value : "",
        name: user.Attributes[1] ? user.Attributes[1].Value : "",
        phone: user.Attributes[2] ? user.Attributes[2].Value : "",
        email: user.Attributes[3] ? user.Attributes[3].Value : "",
      }));
      updateUsers(formattedUsers);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const getFormsList = async () => {
    try {
      const subscription = DataStore.observeQuery(Form).subscribe(
        (snapshot) => {
          const { items } = snapshot;
          updateFormsList(items);
        }
      );
      return subscription;
    } catch (error) {
      console.log("Forms Error: ", error);
    }
  };

  const getProducts = async () => {
    try {
      const subscription = DataStore.observeQuery(Product).subscribe(
        (snapshot) => {
          const { items } = snapshot;
          updateProducts(items);
        }
      );
      return subscription;
    } catch (error) {
      console.log("Products Error: ", error);
    }
  };

  const getFormulaElements = async () => {
    try {
      const subscription = DataStore.observeQuery(FormulaElement).subscribe(
        (snapshot) => {
          const { items } = snapshot;
          updateFormulaElements(items);
        }
      );
      return subscription;
    } catch (error) {
      console.log("Products Error: ", error);
    }
  };

  useEffect(() => {
    getUsers();
    const productsSubscription = getProducts();
    const formulaElementsSubscription = getFormulaElements();
    const formsListSubscription = getFormsList();

    return () => {
      if (productsSubscription) {
        productsSubscription.unsubscribe();
      }
      if (formulaElementsSubscription) {
        formulaElementsSubscription.unsubscribe();
      }
      if (formsListSubscription) {
        formsListSubscription.unsubscribe();
      }
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        users,
        popUser,
        updateUser,
        addUser,
        products,
        updateProducts,
        formulaElements,
        updateFormulaElements,
        formsList,
        updateFormsList,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
