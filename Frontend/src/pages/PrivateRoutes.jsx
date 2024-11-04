import { Navigate, Outlet } from 'react-router-dom'
import { authenticated } from '../Context/ContextProvides'

export const PrivateRoutes = () => {
    const { state } = authenticated()

    if (state.user === undefined) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return state.user ? <Outlet /> : <Navigate to={'/'} />


}
