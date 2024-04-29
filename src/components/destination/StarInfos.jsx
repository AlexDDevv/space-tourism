import React from 'react'

export default function StarInfos({ name, description, distance, travel }) {
    return (
        <>
            <div className="star-description">
                <h2 className='title-star'>{name}</h2>
                <p className='text-star'>{description}</p>
            </div>
            <div className="journey-container">
                <div className="distance">
                    <h3 className='title-journey'>Avg. distance</h3>
                    <h4 className='text-journey'>{distance}</h4>
                </div>
                <div className="travel-time">
                    <h3 className='title-journey'>Est. travel time</h3>
                    <h4 className='text-journey'>{travel}</h4>
                </div>
            </div>
        </>
    )
}
