import React from 'react'
import Corrousel from './Corrousel'
import TimeUntil from './timeUntil'

const Featured = () => {
  return (
    <div className='featured_container'>
      <Corrousel />
      <div className="artist_name">
        <div className='wrapper'>
            Ariana Grande
        </div>
      </div>
      <TimeUntil />
    </div>
  )
}

export default Featured
