import React from 'react'
import logo from "../../assets/shared/logo.svg"
import NavBar from './NavBar'

export default function HeaderContent() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Space tourism website logo" />
            </div>
            <NavBar />
        </header>
    )
}
