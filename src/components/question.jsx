import React from 'react'
import Questions from './questions'
import {nanoid} from 'nanoid'
export default function Question(){
    const [quizData, setQuizData] = React.useState([])
    console.log(quizData)

    React.useEffect(()=> {
        fetch("https://opentdb.com/api.php?amount=5&category=31&type=boolean")
            .then(res => res.json())
            .then(data => setQuizData(data.results))
    }, [])
    const quizEl = quizData.map(quiz => (
    <Questions id={nanoid()}  quizInfo={quiz}/>
    ))
    return(
        <>
           {quizEl}
        </>
    )
}