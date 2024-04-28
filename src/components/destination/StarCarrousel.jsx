import React, { useState } from 'react'
import StarImg from './StarImg'
import StarName from './StarName'
import data from "../../data/data.json"

export default function StarCarrousel() {
    const [index, setIndex] = useState("Moon")
    const [selectedStar, setSelectedStar] = useState(false)
    const dataStar = data.destinations.find(obj => obj.name === index)

    const handleStar = (e) => {
        const changeStar = e.target.textContent
        setIndex(changeStar)
        setSelectedStar(!selectedStar)
    }

    return (
        <div className='star-presentation'>
            <StarImg
                img={dataStar.images.webp}
                title={dataStar.name}
            />
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
                <div className="star-description">
                    <h2 className='title-star'>{dataStar.name}</h2>
                    <p className='text-star'>{dataStar.description}</p>
                </div>
                <div className="journey-container">
                    <div className="distance">
                        <h3 className='title-journey'>Avg. distance</h3>
                        <h4 className='text-journey'>{dataStar.distance}</h4>
                    </div>
                    <div className="travel-time">
                        <h3 className='title-journey'>Est. travel time</h3>
                        <h4 className='text-journey'>{dataStar.travel}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}