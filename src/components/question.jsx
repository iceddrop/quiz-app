import React from 'react'
import Questions from './questions'
import {nanoid} from 'nanoid'
export default function Question(){
    const [quizData, setQuizData] = React.useState([])
    const [score, setScore] = React.useState(0)
    const [finishGame, setFinishGame] = React.useState(false)
    const [refreshData, setRefreshData] = React.useState(false);

    const updateScore = newScore => {
        setScore(prevScore => prevScore + newScore)
    }
    React.useEffect(()=> {
        fetch("https://opentdb.com/api.php?amount=5&category=31&type=boolean")
            .then(res => res.json())
            .then(data => setQuizData(quiz =>{
                return data.results.map(dataObj =>{
                    return {...dataObj, isPicked: false, id:nanoid()}
                })
               }))
  
    }, [])
        
    function pickAnswer(id){
        setQuizData(val => val.map(item => (
        item.id === id ?  {...item, isPicked: !item.isPicked} : {...item}
        ) 
        ))
        console.log(id)
        }

    console.log(score)
    const quizEl = quizData.map(quiz => (
    <Questions toggle={()=> pickAnswer(quiz.id)} isPicked={quiz.isPicked} updateScore={updateScore}  quizInfo={quiz}/>
    ))
    function submit(){
        setFinishGame(val =>!val)
        setRefreshData(refreshData => !refreshData)
     }
    function newGame(){
        if(refreshData === true){
            window.location.reload();
        }
    }
   
console.log(quizData)
 
    return(
        <>
           {quizEl}
           <div className="btn-div">
             { finishGame ?  <button onClick={newGame} className="button-1">New Game</button> : <button onClick={submit} className="button-1">Submit</button>}
           </div>
             {finishGame ? <p className='score'>{score}/5</p> : ''} 
        </>
    )
}