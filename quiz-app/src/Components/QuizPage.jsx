import React from 'react'
import { useLocation } from 'react-router-dom'

const QuizPage = () => {

    const {state} = useLocation();
    
  return (
    <div>{state.topic}</div>
  )
}

export default QuizPage