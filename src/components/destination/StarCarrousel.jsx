import React, { useState } from 'react'
import StarImg from './StarImg'
import StarName from './StarName'
import StarInfos from './StarInfos'
import data from "../../data/data.json"
import { AnimatePresence } from 'framer-motion'

export default function StarCarrousel() {
    const [index, setIndex] = useState("Moon")
    const [selectedStar, setSelectedStar] = useState(false)

    const handleStar = (e) => {
        const changeStar = e.target.textContent
        setIndex(changeStar)
        setSelectedStar(!selectedStar)
    }

    return (
        <div className='star-presentation'>
            <AnimatePresence mode='wait'>
                {data.destinations.map((item) => (
                    item.name === index && (
                        <StarImg
                            key={item.name}
                            img={item.images.webp}
                            title={item.name}
                        />
                    )
                ))}
            </AnimatePresence>
            <div className="star-content">
                <div className="stars-name-container">
                    <ul className='stars-list'>
                        {data.destinations.map((item, i) => (
                            <StarName
                                key={i}
                                selected={item.name === index}
                                onClick={(e) => handleStar(e)}
                                title={item.name}
                            />
                        ))}
                    </ul>
                </div>
                <AnimatePresence mode='wait'>
                    {data.destinations.map((item) => (
                        item.name === index && (
                            <StarInfos
                                key={item.name}
                                name={item.name}
                                description={item.description}
                                distance={item.distance}
                                travel={item.travel}
                            />
                        )
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}