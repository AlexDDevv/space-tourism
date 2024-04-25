import React, { useState } from 'react'
import hamburger from "../../assets/shared/icon-hamburger.svg"
import closeMenu from "../../assets/shared/icon-close.svg"
import NavLi from './NavLi'
import data from "../../data/data.json"

export default function NavBar() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className='nav-bar'>
            <div className="wrapper" onClick={handleMenu}>
                <img 
                    src={!openMenu ? hamburger : closeMenu} 
                    alt="Icon to open and close the menu" 
                />
            </div>
            <div className={`menu-content ${openMenu ? "open-menu" : ""}`}>
                <ul className='nav-list'>
                    {data.navLink.map((item, i) => (
                        <NavLi
                            key={i}
                            page={item.page}
                            number={item.number}
                            content={item.content}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    )
}
