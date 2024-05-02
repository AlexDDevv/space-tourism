import React from 'react'

export default function CrewInfos({ rank, name, bio }) {
  return (
    <div className='crew-info'>
        <h2 className="title-crew rank-member">{rank}</h2>
        <h3 className="title-crew crew-name">{name}</h3>
        <p className='crew-bio'>{bio}</p>
    </div>
  )
}
