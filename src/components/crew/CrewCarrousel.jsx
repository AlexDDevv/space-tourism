import React, { useState } from 'react'
import CrewImg from './CrewImg'
import InputRadioCrew from './InputRadioCrew'
import CrewInfos from './CrewInfos'
import data from "../../data/data.json"

export default function CrewCarrousel() {
    const [index, setIndex] = useState(0)

    const handleRadio = (radioIdx) => {
        setIndex(radioIdx)
    }

    return (
        <div className='carrousel-container'>
            <div className="crew-img-container">
                {data.crew.map((img, idx) => (
                    <CrewImg
                        key={img.name}
                        img={img.images.webp}
                        name={img.name}
                        display={index === idx ? "display" : "hide"}
                    />
                ))}
            </div>
            <div className="btn-carrousel">
                {data.crew.map((input, radioIdx) => (
                    <InputRadioCrew
                        key={input.name}
                        btn={input.name}
                        checked={index === radioIdx}
                        onChange={() => handleRadio(radioIdx)}
                    />
                ))}
            </div>
            {data.crew.map((item, idx) => (
                index === idx && (
                    <CrewInfos
                        key={item.name}
                        rank={item.role}
                        name={item.name}
                        bio={item.bio}
                    />
                )
            ))}
        </div>
    )
}
