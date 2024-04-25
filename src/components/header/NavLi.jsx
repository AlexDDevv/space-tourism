import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLi({ page, number, content }) {
  return (
    <li className="nav-li">
        <NavLink to={page} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <span className='nav-span'>{number}</span>
            {content}
        </NavLink>
    </li>
  )
}
