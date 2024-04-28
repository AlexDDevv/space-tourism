import React from 'react'
import StarCarrousel from '../components/destination/StarCarrousel'
import transition from '../utils/transition'

const Destination = () => {
    return (
        <main className='main-destination'>
            <section>
                <h1 className='pick'><span>01</span>Pick your destination</h1>
                <StarCarrousel />
            </section>
        </main>
    )
}

export default transition(Destination)