import React, { useEffect, useState } from 'react'
import Dice from '../../Images/Dice.jpg'
import './Player.scss'

const Player = () => {

    // Move the player 1
    const [isPlayerOne, setIsPlayerOne] = useState({ X: -1, Y: -8});

    // Move the player 2
    const [isPlayerTwo, setIsPlayerTwo] = useState({ X: -1, Y: -1 });


    //Select  player turn
    const [turn, setTurn] = useState('Player1');

    // Set Random  Number from 1 to 6
    const [random, setRandom] = useState(0)

    // Winner 
    const [winner, setWinner] = useState(false)


    // Throw the dice
    const [Throw, setThrow] = useState(false)




    // From 1 to 6
    const RandomNumber = () => {
        setTimeout(() => {
            setThrow(true)
        }, 100);

        if (winner) {
            setRandom(0)
            return
        }

        setRandom(Math.floor(Math.random() * 6) + 1)

        if (turn === "Player1") {
            setIsPlayerOne({ X: (+isPlayerOne.X + random), Y: isPlayerOne.Y });

        }

        if (turn === "Player2") {
            setIsPlayerTwo({ X: (+isPlayerTwo.X + random), Y: isPlayerTwo.Y });
        }

        if (turn === "Player1") {
            setTurn("Player2")

        } else {
            setTurn("Player1")
        }

        setTimeout(() => {
            setThrow(false)
        }, 1000);
    }

    useEffect(() => {
        if (isPlayerOne.X >= 10) {
            setIsPlayerOne({ X: 0, Y: isPlayerOne.Y - 1 });
        }
        if (isPlayerTwo.X >= 10) {
            setIsPlayerTwo({ X: 0, Y: (isPlayerTwo.Y - 1) })
        }

        // Climb Up the 1st Ladder 1
        if (isPlayerOne.X === 9 && isPlayerOne.Y === -1) {
            setIsPlayerOne({ X: 6, Y: isPlayerOne.Y - 5 });
        }
        if (isPlayerTwo.X === 9 && isPlayerTwo.Y === -1) {
            setIsPlayerTwo({ X: 6, Y: isPlayerOne.Y - 5 });
        }

        // Climb Up the  2nd Ladder 
        if (isPlayerOne.X === 3 && isPlayerOne.Y === -3) {
            setIsPlayerOne({ X: 5, Y: - 8 });
        }
        if (isPlayerTwo.X === 3 && isPlayerTwo.Y === -3) {
            setIsPlayerTwo({ X: 5, Y: - 8 });
        }


        // Climb Up the  3rd Ladder 
        if (isPlayerOne.X === 2 && isPlayerOne.Y === -4) {
            setIsPlayerOne({ X: 3, Y: - 9 });
        }
        if (isPlayerTwo.X === 2 && isPlayerTwo.Y === -4) {
            setIsPlayerTwo({ X: 3, Y: - 9 });
        }


        // Climb Down the 1st Snake
        if (isPlayerOne.X === 8 && isPlayerOne.Y === -9) {
            setIsPlayerOne({ X: 4, Y: -3 });
        }

        if (isPlayerTwo.X === 0 && isPlayerTwo.Y === -9) {
            setIsPlayerTwo({ X: 4, Y: -3 });
        }


        // Climb Down the 2nd Snake
        if (isPlayerOne.X === 1 && isPlayerOne.Y === -9) {
            setIsPlayerOne({ X: 5, Y: -1 });
        }

        if (isPlayerTwo.X === 1 && isPlayerTwo.Y === -9) {
            setIsPlayerTwo({ X: 5, Y: -1 });
        }




        // Calculate the Winner 🏆
        // If Go Beond 100 🏆
        if (isPlayerOne.X >= 9 && isPlayerOne.Y === -10) {
            setWinner(true)
            setTurn("Player One Is Winner 🏆😊")

        }
        if (isPlayerTwo.X >= 9 && isPlayerTwo.Y === -10) {
            setWinner(true)
            setTurn("Player Two Is Winner 🏆😊")

        }
    }, [isPlayerOne.X, isPlayerTwo.X]);





    // To start a new Game
    const newGame = () => {
        setIsPlayerTwo({ X: -1, Y: -1 })
        setIsPlayerOne({ X: -1, Y: -1 })
        setRandom(0)
        setWinner(false)
        setTurn("Player1")
        setThrow(false)
    }

    return (

        <div className='Players' >
            <div className='Player2' style={{ transform: `translate(${-(isPlayerTwo.X) * 100}%, ${isPlayerTwo.Y * 98}%)` }}>2
            </div>
            <div className='Player1' style={{ transform: `translate(${-(isPlayerOne.X) * 100}%, ${isPlayerOne.Y * 98}%)` }}>1
            </div>
            <button
                disabled={winner || Throw}
                onClick={
                    RandomNumber}
                style={{ height: "10%" }}
            >Roll the Dice 🎲  </button>
            <div> {!winner && random} {!winner && "steps"}
                <img src={Dice} alt="dice" className={`${Throw ? "dice-move" : "dice"}`} hidden={winner} />
            </div>
            {winner && <button
                onClick={newGame}
            > {winner && "GameOver"} Start New Game 🎮</button>}
            <div>{turn}</div>
        </div>
    )
}

export default Player