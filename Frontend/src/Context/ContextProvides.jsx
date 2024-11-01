import React, { createContext } from 'react'
import { useContext, useReducer } from 'react'
import { reducer } from './reducer.js'
import { initialState } from './initialStates.js'
import { authTypes } from './authTypes.js'

const newContext = createContext()




export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const login = async (email, password) => {
        try {
            const response = await fetch("http://localhost:4000/auth/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })
            const data = response.json()

            if (response.ok) {
                dispatch({ type: authTypes.isLogged, payload: response })
            } else {
                throw new Error("Invalid credentials")
            }
            console.log(data)
        } catch (error) {
            console.error("invalid Credentials")
        }
    }

    return (
        <newContext.Provider value={{ state, login }}>
            {children}
        </newContext.Provider>
    )
}

export const authenticated = useContext(newContext)
