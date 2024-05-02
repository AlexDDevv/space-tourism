import React from 'react'
import { motion } from 'framer-motion'

export default function CrewImg({ img, name, display }) {
    return (
        <motion.div 
            className="crew-img-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            <img
                src={img}
                alt={`A crew member: ${name}`}
                className={`crew-img ${display}`}
            />
        </motion.div>
    )
}
