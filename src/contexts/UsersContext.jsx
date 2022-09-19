import React, { createContext, useEffect, useState } from "react";
import { createUser, deleteUser, usersList } from "../services/UserServices";

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersList().then(data => setUsers(data))
    }, [setUsers]);

    const addUser = (phone_number) => {
        createUser(phone_number)
            .then(data => setUsers([...users, data.User]))
    }

    const popUser = (phone_number)=>{
        deleteUser(phone_number).then(() => setUsers(users.filter((user)=> user.phone_number !== phone_number)) )
    }
    return(
        <UsersContext.Provider value={{
            addUser,
            popUser,
            users
        }} >
            {props.children}
        </UsersContext.Provider>
    )
}
