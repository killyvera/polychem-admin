import React, { createContext, useEffect, useState } from "react";
import { createUser, deleteUser, usersList } from "../services/UserServices";

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {

    const [users, setUsers] = useState([]);
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        usersList().then(data => setUsers(data))
    }, [toggle]);

    const addUser = (phone_number, name, puesto, departamento) => {
        createUser(phone_number, name, puesto, departamento).then(async ()=>(setToggle(!toggle)))
            //.then(data => setUsers([...users, data.User]))
    }

    const popUser = (user)=>{
        deleteUser(user).then(async ()=>(setToggle(!toggle)))
        //.then(() => setUsers(users.filter((user)=> user !== user.Username)) )
    }
    return(
        <UsersContext.Provider value={{
            addUser,
            popUser,
            users,
            toggle,
            setToggle,
            setUsers
        }} >
            {props.children}
        </UsersContext.Provider>
    )
}
