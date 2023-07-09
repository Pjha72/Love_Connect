import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext()
const INITIAL_STATE = {
    users: [],
};

export const AuthContextProvider = ({ children }) => {
    
    const [currentUser, setCurrentUser] = useState([]);

    const addUser = (userArray) => {
        setCurrentUser([...currentUser, ...userArray]);
    };

    return (
        < AuthContext.Provider value={{ currentUser, addUser }} >
            {children}
        </AuthContext.Provider >
    )
}