import React from 'react'

export default function InputRadioCrew({ btn, checked, onChange }) {
    return (
        <div className='input-container'>
            <input
                type="radio"
                id={btn}
                className='input-carrousel'
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={btn}></label>
        </div>
    )
}
