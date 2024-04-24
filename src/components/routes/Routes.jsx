import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../../pages/Home"
import Destination from "../../pages/Destination"
import Crew from "../../pages/Crew"
import Technology from "../../pages/Technology"
import NotFound from "../../pages/NotFound"

export default function IndexRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='/crew' element={<Crew />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}
