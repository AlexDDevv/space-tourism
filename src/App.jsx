import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"
import { AnimatePresence } from "framer-motion"

function App() {
    const location = useLocation()

    return (
        <>
            <Header />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname} >
                    <Route index element={<Home />} />
                    <Route path="/destination" element={<Destination />} />
                    <Route path="/crew" element={<Crew />} />
                    <Route path="/technology" element={<Technology />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App
