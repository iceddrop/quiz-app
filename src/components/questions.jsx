import React from 'react'

export default function Questions(props){
    const answer1 = props.quizInfo.correct_answer
    const answer2 = props.quizInfo.incorrect_answers[0]
      
  const handleClick = (isCorrect) => {
       if(isCorrect == answer1){
        return props.updateScore(1)
       }else{
        console.log('wrong')
       }
  }
  

    return(
        <div className='quiz-div'>
          <h4 className="question">{props.quizInfo.question}</h4>
          <div className='options-list'>
            <button onClick={()=>{handleClick(answer1)}} className="dormant-button">{answer1}</button>
            <button onClick={()=>{handleClick(answer2)}}  className="dormant-button ml">{answer2}</button>
          </div>
        </div>
    )
}