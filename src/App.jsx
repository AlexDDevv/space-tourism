import React, { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"
import { AnimatePresence } from "framer-motion"

function App() {
    const location = useLocation().pathname;

    useEffect(() => {
        const setBackgroundClass = () => {
            document.body.classList.remove(
                "home-page",
                "destination-page",
                "crew-page",
                "technology-page"
            );

            if (location === "/") {
                document.body.classList.add("home-page");
            } else if (location === "/destination") {
                document.body.classList.add("destination-page");
            } else if (location === "/crew") {
                document.body.classList.add("crew-page");
            } else if (location === "/technology") {
                document.body.classList.add("technology-page");
            }
        };

        setBackgroundClass();
    }, [location]);

    return (
        <>
            <Header />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location} >
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
