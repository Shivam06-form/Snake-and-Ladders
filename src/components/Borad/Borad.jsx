import React from 'react'
import './Borad.scss'
import Player from '../Player/Player';
import Ladders from '../Ladders/Ladders';
import Snake from '../Snake/Snake';

const Borad = () => {
    const numbers = ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).reverse();
    const board = ([1, 11, 21, 31, 41, 51, 61, 71, 81, 91]);

    const n = 10

    return (
        <div className='Borad'>
            <Snake />
            <Ladders />
            <Player />
            {board.map((b, i) => {
                return (< div className='houses' key={i}>
                    {numbers.map((a, i2) => {
                        return (<div className='houses-columns' key={i2}

                        >{a + b}

                        </div>)
                    })}
                </div>)
            })
            }

        </div >
    )
}

export default Borad