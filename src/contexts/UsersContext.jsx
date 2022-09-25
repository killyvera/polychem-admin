import React, { createContext, useEffect, useState } from "react";
import { createUser, deleteUser, usersList, editUser, getUser } from "../services/UserServices";

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        usersList().then(data => setUsers(data))
    }, [toggle]);

    const addUser = (phone, email, name, perfil, puesto, departamento) => {
        createUser(phone, email, name, perfil, puesto, departamento).then(async () => (setToggle(!toggle)))
        //.then(data => setUsers([...users, data.User]))
    }

    const updateUser = (userId, phone, email, name, perfil, puesto, departamento) => {
        editUser(userId, phone, email, name, perfil, puesto, departamento).then(async () => (setToggle(!toggle)))
    }

    const popUser = (user) => {
        deleteUser(user).then(async () => (setToggle(!toggle)))
        //.then(() => setUsers(users.filter((user)=> user !== user.Username)) )
    }
    const giveMeUser = async (userId) => {
        const data = await getUser(userId);
        return (() => (setUser(data.UserAttributes)));
        //.then(() => setUsers(users.filter((user)=> user !== user.Username)) )
    }

    return (
        <UsersContext.Provider value={{
            addUser,
            updateUser,
            popUser,
            setUser,
            users,
            user,
            toggle,
            setToggle,
            setUsers,
            giveMeUser
        }} >
            {props.children}
        </UsersContext.Provider>
    )
}
