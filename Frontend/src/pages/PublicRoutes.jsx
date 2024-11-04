import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { authenticated } from '../Context/ContextProvides'

export const PublicRoutes = () => {
    const { state } = authenticated()
    return !state.user ? <Outlet /> : <Navigate to={"/home"} />
}
