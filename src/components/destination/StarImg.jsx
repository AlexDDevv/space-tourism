import React from 'react'

export default function StarImg({ img, title }) {
    return (
        <div className="star-img-container">
            <img 
                src={img} 
                alt={`Selected star: ${title}`} 
                className={`img-${title}`}
            />
        </div>
    )
}
