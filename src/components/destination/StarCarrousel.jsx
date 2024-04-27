import React from 'react'

export default function StarCarrousel() {
    return (
        <>
            <div className='top-part'>
                <div className="stars-img-container">
                    <div className="star-img">
                        <img src="/destinationImg/image-moon.webp" alt={`Selected star: Moon`} />
                    </div>
                </div>
                <div className="stars-name-container">
                    <ul className='stars-list'>
                        <li className="star-li">Moon</li>
                        <li className="star-li">Mars</li>
                        <li className="star-li">Europa</li>
                        <li className="star-li">Titan</li>
                    </ul>
                </div>
                <div className="star-description">
                    <h1>Moon</h1>
                    <p>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                </div>
            </div>
            <div className="bottom-part">
                <div className="distance">
                    <h2>Avg. distance</h2>
                    <h3>384,400 km</h3>
                </div>
                <div className="travel-time">
                    <h2>Est. travel time</h2>
                    <h3>3 days</h3>
                </div>
            </div>
        </>
    )
}
