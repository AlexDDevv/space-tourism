import React, { useState } from 'react'
import TechnoImg from './TechnoImg'
import TechnoBtn from './TechnoBtn'
import TechnoInfos from './TechnoInfos'
import data from "../../data/data.json"

export default function TechnoCarrousel() {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(false)
    const label = [1, 2, 3]

    const handleTechno = (idx) => {
        const direction = idx > index ? "right" : "left"
        setIndex(idx)
        setDirection(direction)
    }

    return (
        <div className='techno-container'>
            {data.technology.map((techno, idx) => (
                index === idx && (
                    <TechnoImg
                        key={techno.name}
                        direction={direction}
                        techno={techno.images.landscape}
                        alt={techno.name}
                    />
                )
            ))}
            <div className="btn-container">
                {data.technology.map((techno, idx) => (
                    <TechnoBtn
                        key={techno.name}
                        btn={techno.name}
                        checked={index === idx}
                        onChange={() => handleTechno(idx)}
                        nb={label[idx]}
                    />
                ))}
            </div>
            {data.technology.map((techno, idx) => (
                index === idx && (
                    <TechnoInfos
                        key={techno.name}
                        techno={techno.name}
                        description={techno.description}
                    />
                )
            ))}
        </div>
    )
}
