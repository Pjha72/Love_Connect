import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const userReducer = (state) =>{
        
    }
    const [currentUser, setCurrentUser] = useState({})
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)

    return (
        < AuthContext.Provider value={{ currentUser, dispatch  }} >
            {children}
        </AuthContext.Provider >
    )
}