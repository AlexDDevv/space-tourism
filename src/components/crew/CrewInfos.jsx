import React from 'react'
import { motion } from 'framer-motion'

export default function CrewInfos({ rank, name, bio }) {
    return (
        <motion.div
            className='crew-info'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            <h2 className="title-crew rank-member">{rank}</h2>
            <h3 className="title-crew crew-name">{name}</h3>
            <p className='crew-bio'>{bio}</p>
        </motion.div>
    )
}
