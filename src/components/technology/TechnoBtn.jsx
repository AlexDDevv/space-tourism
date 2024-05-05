import React from 'react'

export default function TechnoBtn({ btn, checked, onChange, nb }) {
    return (
        <div className='input-container'>
            <input
                type="radio"
                id={btn}
                className='input-carrousel'
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={btn} className='btn-carrousel'>{nb}</label>
        </div>
    )
}
