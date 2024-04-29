import React from 'react'
import { motion } from 'framer-motion'

export default function StarImg({ img, title }) {
    return (
        <motion.div 
            className="star-img-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            <img 
                src={img} 
                alt={`Selected star: ${title}`} 
                className={`img-${title}`}
            />
        </motion.div>
    )
}
