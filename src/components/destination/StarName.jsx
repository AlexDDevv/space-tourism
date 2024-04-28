import React from 'react'

export default function StarName({ selected, onClick, title }) {
    return (
        <li className={`star-li ${selected ? "selected" : ""}`} onClick={onClick}>{title}</li>
    )
}
