import React from 'react'
import { motion } from 'framer-motion'

export default function TechnoInfos({ techno, description }) {
    return (
        <motion.div 
            className="techno-infos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <h2 className='terminology'>The terminology...</h2>
            <h3 className='techno-title'>{techno}</h3>
            <p className='techno-presentation'>{description}</p>
        </motion.div>
    )
}
