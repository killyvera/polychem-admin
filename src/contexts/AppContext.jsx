import { useEffect, createContext, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Product } from "../models";
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
  updateProducts: [],
});

export const AppContext = createContext(initialDetails());

export const AppContextProvider = (props) => {
  const [users, updateUsers] = useState([]);
  const [products, updateProducts] = useState([]);

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

  useEffect(() => {
    getUsers();
    const subscription = getProducts();

    return () => {
      if (subscription) {
        subscription.unsubscribe();
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
