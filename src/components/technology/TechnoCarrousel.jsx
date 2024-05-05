import React, { useState, useEffect } from 'react'
import TechnoImg from './TechnoImg'
import TechnoBtn from './TechnoBtn'
import TechnoInfos from './TechnoInfos'
import data from "../../data/data.json"

export default function TechnoCarrousel() {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(false)
    const [breakPoint, setBreakPoint] = useState(false)

    const label = [1, 2, 3]

    const handleTechno = (idx) => {
        let direction;
        if (breakPoint) {
            direction = "right";
        } else {
            direction = idx > index ? "right" : "left";
        }

        setIndex(idx)
        setDirection(direction)
    }

    useEffect(() => {
        const handleBreakPoint = () => {
            setBreakPoint(window.innerWidth >= 1024);
        };

        handleBreakPoint();
        window.addEventListener('resize', handleBreakPoint);

        return () => {
            window.removeEventListener('resize', handleBreakPoint);
        };
    }, []);

    return (
        <div className='techno-container'>
            {data.technology.map((techno, idx) => (
                index === idx && (
                    <TechnoImg
                        key={techno.name}
                        direction={direction}
                        techno={breakPoint ? techno.images.portrait : techno.images.landscape}
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
