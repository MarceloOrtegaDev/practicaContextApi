import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DefectPage, Home, Login, Register } from "./pages"
import { Suspense } from 'react'

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route>                       
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="*" element={<DefectPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
