import React from 'react'

export default function Questions(props){
    const [answers, setAnswers] = React.useState([props.quizInfo.correct_answer,props.quizInfo.incorrect_answers[0]])
    const [score, setScore] = React.useState(0)
   console.log(answers)
  const handleClick = (isCorrect) => {
       if(answers == isCorrect){
        return setScore(prevScore => prevScore + 1)
       }else{
        'wrong'
       }
  }
  console.log(score)
    return(
        <div className='quiz-div' id={props.id}>
          <h4 className="question">{props.quizInfo.question}</h4>
          <div className='options-list'>
            <button onClick={()=>{handleClick(answers[0])}} className="option">{answers[0]}</button>
            <button onClick={()=>{handleClick(answers[0])}}  className="option">{answers[1]}</button>

          </div>
        </div>
    )
}