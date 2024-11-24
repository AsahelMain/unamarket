import React, { useEffect } from "react";
import { useContext, createContext, useState } from "react";
import { useCookies } from 'react-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const [user, setUser] = useState(
        () => {
            const userData = cookies.user;
            return userData ? userData : null;
        }
    );

    useEffect(() => {
        if(user !== null) {
            setCookie("user", JSON.stringify(user), { path: "/"});
        } else {
            removeCookie("user", { path: "/"});
        }
    }, [user, setCookie, removeCookie]);

    const login = (userData) => {
        console.log(userData);
        setUser(userData);
    }

    const logout = () => {
        setUser(null);
    }

    return <AuthContext.Provider value={{ user, login, logout}}>{ children }</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}
