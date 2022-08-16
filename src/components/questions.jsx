import React from 'react'

export default function Questions(props){
    const answer1 = props.quizInfo.correct_answer
    const answer2 = props.quizInfo.incorrect_answers[0]
    const [score, setScore] = React.useState(0)
    console.log(answer1)
    console.log(answer2)
  const handleClick = (isCorrect) => {
       if(isCorrect == answer1){
        return setScore(prevScore => prevScore + 1)
       }else{
        console.log('wrong')
       }
  }

  
  console.log(score)
    return(
        <div className='quiz-div'>
          <h4 className="question">{props.quizInfo.question}</h4>
          <div className='options-list'>
            <button onClick={()=>{handleClick(answer1)}} className="option">{answer1}</button>
            <button onClick={()=>{handleClick(answer2)}}  className="option">{answer2}</button>

          </div>
        </div>
    )
}