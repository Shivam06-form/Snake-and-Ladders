import React from 'react'
import './Ladders.scss'
import Ladder from '../../Images/ladder.png'

const Ladders = () => {
    return (
        <div className='Ladders'>
            <img src={Ladder} alt="Ladder1"  className='Ladder1'/>
            <img src={Ladder} alt="Ladder2"  className='Ladder2'/>
            <img src={Ladder} alt="Ladder2"  className='Ladder3'/>
             </div>
    )
}

export default Ladders