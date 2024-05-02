import React from 'react'
import CrewCarrousel from '../components/crew/CrewCarrousel'
import transition from '../utils/transition'

const Crew = () => {
    return (
        <main className='crew-main'>
            <section className='section-crew'>
                <h1 className='meet-crew title-page'><span>02</span>Meet your crew</h1>
                <CrewCarrousel />
            </section>
        </main>
    )
}

export default transition(Crew)
