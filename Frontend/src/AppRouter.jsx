import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { DefectPage, Home, Login, Register } from "./pages";
import { Suspense } from 'react';
import { authenticated } from './Context/ContextProvides';

export const AppRouter = () => {
    const { state } = authenticated(); // Asegúrate de que esto retorna el estado correcto

    return ( 
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    {state.user ? (
                        <>
                            <Route path="/home" element={<Home />} />
                            <Route path="*" element={<DefectPage />} />
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </>
                    )}
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
