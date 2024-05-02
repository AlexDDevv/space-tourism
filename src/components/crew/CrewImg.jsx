import React from 'react'

export default function CrewImg({ img, name, display }) {
    return (
        <img
            src={img}
            alt={`A crew member: ${name}`}
            className={`crew-img ${display}`}
        />
    )
}
