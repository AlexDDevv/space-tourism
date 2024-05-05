import React from 'react'
import { motion } from 'framer-motion'

export default function TechnoImg({ direction, techno, alt }) {
    const xValue = direction === 'left' ? '-100%' : '100%';

    return (
        <motion.div 
            className="img-container"
            initial={{ x: xValue }}
            animate={{ x: 0 }}
            exit={{ x: xValue }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <img
                src={techno}
                alt={`This is a ${alt}`}
            />
        </motion.div>
    )
}
