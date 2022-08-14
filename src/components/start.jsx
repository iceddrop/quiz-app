import React from 'react'
import { useState } from 'react'
import {nanoid} from 'nanoid'
import samurai from '../assets/Lovepik_com-828839749-螳螂 insect samurai commercial elements.png'
import Question from './question'
export default function Start(){
    const [startGame, setStartGame] = React.useState(false)

   
    return(
        <div className="body">
            { startGame ?
            <div className='question-div'>
              <Question/>
             </div> 
                :
                <div className="div-1">
                    <h1 className='quiz-name'>Anime Wiz</h1>
                    <p className='description'>Otaku face-off. Prove your commitment.</p>
                    <button className="btn-1" onClick={()=>{setStartGame(val=>(!val))}}>Start Quiz</button>
                    <img className='img-1' src={samurai} alt="samurai"/>
                </div>
            }
        </div>
    )
}