import React from 'react'
import TechnoCarrousel from '../components/technology/TechnoCarrousel'
import transition from '../utils/transition'

const Technology = () => {
    return (
        <main className='main-techno'>
            <section>
                <h1 className='launch title-page'><span>03</span>Space launch 101</h1>
                <TechnoCarrousel />
            </section>
        </main>
    )
}

export default transition(Technology)