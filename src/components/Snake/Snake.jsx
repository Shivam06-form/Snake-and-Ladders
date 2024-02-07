import React from 'react'
import snake from '../../Images/snake.png'
import './Snake.scss'

const Snake = () => {
    return (
        <div className='Snake'>
            <img src={snake} alt="snake1"  className='snake1'/>
            <img src={snake} alt="snake2" className='snake2'/>
        </div>
    )
}

export default Snake