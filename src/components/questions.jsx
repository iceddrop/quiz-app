import React from 'react'

export default function Questions(props){
    const answer1 = props.quizInfo.correct_answer
    const answer2 = props.quizInfo.incorrect_answers[0]
      const answerArr = [
        props.quizInfo.correct_answer ,
        props.quizInfo.incorrect_answers[0]
      ]
  
      const correct = answerArr.find(element => element = props.quizInfo.correct_answer);
      console.log(correct)

  const handleClick = (isCorrect) => {
       if(isCorrect == correct){
        return props.updateScore(1)
       }else{
        console.log('wrong')
       }
  }
  
 
  var refined = answerArr.sort(func);  
  
  function func(a, b) {  
    return 0.5 - Math.random();
  }  
  
  console.log(refined);

    return(
        <div className='quiz-div'>
          <h4 className="question">{props.quizInfo.question}</h4>
          <div className='options-list'>
            <button onClick={()=>{handleClick(refined[0])}} className="dormant-button">{refined[0]}</button>
            <button onClick={()=>{handleClick(refined[1])}}  className="dormant-button ml">{refined[1]}</button>
          </div>
        </div>
    )
}