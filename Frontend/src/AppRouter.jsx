import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./pages/PrivateRoutes.jsx";
import { DefectPage, Home, Login, Register } from "./pages";
import { PublicRoutes } from "./pages/PublicRoutes.jsx";

import { Suspense } from 'react';

export const AppRouter = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route element={<PublicRoutes />}>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    <Route element={<PrivateRoutes />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="*" element={<DefectPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
