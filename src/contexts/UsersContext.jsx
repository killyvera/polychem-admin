import React, { createContext, useEffect, useState } from "react";
import { createUser, deleteUser, usersList, editUser, getUser } from "../services/UserServices";

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

    const updateUser =(userId,email,name, puesto, departamento)=>{
        editUser(userId,email,name, puesto, departamento).then(async ()=>(setToggle(!toggle)))
    }

    const popUser = (user)=>{
        deleteUser(user).then(async ()=>(setToggle(!toggle)))
        //.then(() => setUsers(users.filter((user)=> user !== user.Username)) )
    }
    const giveMeUser = (userId)=>{
        getUser(userId).then(async ()=>(setToggle(!toggle)))
        //.then(() => setUsers(users.filter((user)=> user !== user.Username)) )
    }

    return(
        <UsersContext.Provider value={{
            addUser,
            updateUser,
            popUser,
            users,
            toggle,
            setToggle,
            setUsers,
            giveMeUser
        }} >
            {props.children}
        </UsersContext.Provider>
    )
}
