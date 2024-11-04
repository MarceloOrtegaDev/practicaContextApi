import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer.js';
import { initialState } from './initialStates.js';
import { authTypes } from './authTypes.js';
import { logoutService } from '../Services/api.Services.js';

const NewContext = createContext();

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const login = async (email, password) => {
        try {
            const response = await fetch("http://localhost:4000/auth/sign-in", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json(); // Esperar la respuesta

            if (data) {
                dispatch({ type: authTypes.isLogged, payload: data });
            } else {
                throw new Error(data.message || "Credenciales inválidas");
            }
            console.log(data);
        } catch (error) {
            console.error("Error de inicio de sesión: ", error.message);
        }
    };

    const registerUser = async (username, email, password) => {
        try {
            const response = await fetch("http://localhost:4000/auth/sign-up", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await response.json();
            if (data) {
                dispatch({ type: authTypes.isLogged, payload: data });
            } else {
                throw new Error(data.message || "Error en el registro");
            }
        } catch (error) {
            console.error("Error de registro: ", error.message);
        }
    };

    const useSession = async () => {
        try {
            const response = await fetch("http://localhost:4000/auth/me", {
                method: "GET",
                credentials: "include",
            });
            if (!response.ok) {
                throw new Error("Erro")
            }
            const data = await response.json();
            dispatch({ type: authTypes.isLogged, payload: data });
        } catch (error) {
            dispatch({ type: authTypes.loggedOut })
            console.error("Error al mantener la sesión: ", error.message);
        }
    };

    const signOut = async () => {
        const response = await logoutService()
        if (response.ok) {
            dispatch({ type: authTypes.loggedOut })
        } else {
            console.log("Hubo un error");
        }
    };



    useEffect(() => {
        useSession()
    }, [])

    return (
        <NewContext.Provider value={{ state, login, registerUser, signOut }}>
            {children}
        </NewContext.Provider>
    );
};

export const authenticated = () => useContext(NewContext)
