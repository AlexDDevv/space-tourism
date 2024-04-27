import React from 'react'
import StarCarrousel from '../components/destination/StarCarrousel'
import transition from '../utils/transition'

const Destination = () => {
    return (
        <main className='main-destination'>
            <p className='pick'><span>01</span>Pick your destination</p>
            <section>
                <StarCarrousel />
            </section>
        </main>
    )
}

export default transition(Destination)