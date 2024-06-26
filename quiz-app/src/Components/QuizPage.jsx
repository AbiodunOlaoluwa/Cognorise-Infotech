import React, { useEffect, useState } from 'react';
import data from "../data.json";
import "./quizPage.css";
import { useLocation, useNavigate } from 'react-router-dom'

const QuizPage = () => {

  const { state } = useLocation();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState("HTML");
  const [icon, setIcon] = useState();
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [optionSelected, setOptionSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // const correctIcon = <svg className='correctIcon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z"/></svg>;
  // const incorrectIcon = <svg className='incorrectIcon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"/></svg>;
    
  useEffect(() => {

    const htmlIcon = <svg className='htmlIcon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
    <path fill="#FF7E35" d="M24.508 7.607a1.25 1.25 0 0 1 .634 1.65l-10 22.5a1.25 1.25 0 1 1-2.284-1.015l10-22.5a1.251 1.251 0 0 1 1.65-.635ZM10.832 13.44a1.249 1.249 0 0 1 .1 1.765L6.674 20l4.263 4.795a1.25 1.25 0 1 1-1.87 1.66l-5-5.625a1.25 1.25 0 0 1 0-1.66l5-5.625a1.25 1.25 0 0 1 1.764-.105Zm18.337 0a1.25 1.25 0 0 1 1.765.105l5 5.625a1.25 1.25 0 0 1 0 1.66l-5 5.625a1.25 1.25 0 1 1-1.87-1.66L33.327 20l-4.262-4.795a1.25 1.25 0 0 1 .105-1.765Z" />
    </svg>;
  const cssIcon = <svg className='cssIcon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
    <path fill="#2FD887" d="M10 2.505a1.25 1.25 0 0 0-1.25 1.25V21.25a5 5 0 0 0 5 5H15v6.25a4.999 4.999 0 0 0 9.615 1.913c.25-.607.38-1.257.38-1.913v-6.25h1.255a5 5 0 0 0 5-5V3.755A1.25 1.25 0 0 0 30 2.505H10ZM28.75 17.5h-17.5V5.005h7.5V8.76a1.25 1.25 0 0 0 2.5 0V5.005h2.5v6.24a1.25 1.25 0 0 0 2.5 0v-6.24h2.5V17.5Zm-17.5 3.75V20h17.5v1.25a2.5 2.5 0 0 1-2.5 2.5h-2.505a1.25 1.25 0 0 0-1.25 1.25v7.5a2.497 2.497 0 1 1-4.995 0V25a1.25 1.25 0 0 0-1.25-1.25h-2.5a2.5 2.5 0 0 1-2.5-2.5Z" />
  </svg>
  const jsIcon = <svg className='jsIcon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
    <path fill="#306AFF" d="M21.25 18.75A3.75 3.75 0 0 1 25 15h3.75a1.25 1.25 0 0 1 0 2.5H25a1.25 1.25 0 0 0-1.25 1.25V20A1.25 1.25 0 0 0 25 21.25h1.25A3.75 3.75 0 0 1 30 25v1.25A3.75 3.75 0 0 1 26.25 30H22.5a1.25 1.25 0 0 1 0-2.5h3.75a1.25 1.25 0 0 0 1.25-1.25V25a1.25 1.25 0 0 0-1.25-1.25H25A3.75 3.75 0 0 1 21.25 20v-1.25ZM20 16.25a1.25 1.25 0 0 0-2.5 0v10a1.25 1.25 0 0 1-1.25 1.25h-2.5a1.25 1.25 0 0 0 0 2.5h2.5A3.75 3.75 0 0 0 20 26.25v-10Zm-15-5A6.25 6.25 0 0 1 11.25 5h17.5A6.25 6.25 0 0 1 35 11.25v17.5A6.25 6.25 0 0 1 28.75 35h-17.5A6.25 6.25 0 0 1 5 28.75v-17.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v17.5a3.75 3.75 0 0 0 3.75 3.75h17.5a3.75 3.75 0 0 0 3.75-3.75v-17.5a3.75 3.75 0 0 0-3.75-3.75h-17.5Z" />
  </svg>
  const accessibilityIcon =   <svg className='accessibilityIcon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
    <path fill="#A729F5" d="M16.875 8.125a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0ZM20 2.5a5.625 5.625 0 0 0-5.475 6.915l-4.03-1.625a4 4 0 0 0-5.19 2.18 3.95 3.95 0 0 0 2.175 5.175l5.02 2.027v5.96l-4.532 8.525a3.98 3.98 0 0 0 7.024 3.738L20 25.975l5.01 9.42a3.978 3.978 0 0 0 7.025-3.735L27.5 23.13v-5.957l5.02-2.028a3.95 3.95 0 0 0 2.175-5.175 4 4 0 0 0-5.19-2.183l-4.027 1.628A5.626 5.626 0 0 0 20 2.5ZM7.618 10.922a1.5 1.5 0 0 1 1.94-.817l8.57 3.463a5 5 0 0 0 3.744 0l8.57-3.463a1.5 1.5 0 0 1 1.94.817 1.45 1.45 0 0 1-.8 1.905l-5.02 2.025A2.5 2.5 0 0 0 25 17.175v5.957c0 .41.1.814.293 1.175l4.535 8.528a1.48 1.48 0 0 1-2.61 1.39l-5.01-9.425a2.5 2.5 0 0 0-4.415 0l-5.008 9.418a1.477 1.477 0 1 1-2.61-1.388l4.532-8.525A2.5 2.5 0 0 0 15 23.133v-5.96a2.5 2.5 0 0 0-1.563-2.318l-5.02-2.03a1.45 1.45 0 0 1-.8-1.902Z" />
  </svg>

    if (state.topic === "HTML") {
      setIcon(htmlIcon);
    } else if (state.topic === "CSS") {
      setIcon(cssIcon);
    } else if (state.topic === "Javascript") {
      setIcon(jsIcon);
    } else if (state.topic === "Accessibility") {
      setIcon(accessibilityIcon);
    }
  }, [state.topic])

  useEffect(() => {
    if (state.topic) {
      const selectedQuiz = data.quizzes.find(q => q.title === state.topic);
      if (selectedQuiz) {
        setQuiz(selectedQuiz);
        setLoading(false);
      }
    }
  }, [state.topic])


  if(loading) {
    return <div>Loading...</div>
  }


    // console.log(quiz.questions) //Questions is an array of objects with properties: question, options and answer

    const questions = quiz.questions;

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerSelect = (option,index) => {
      setSelectedAnswer(option);
    }

    const navigateToScorePage = () => {
      navigate('/scorePage', {state: {score: userScore}});
    }

    const handleNextQuestionClick = () => {
      if (currentQuestionIndex === quiz.questions.length - 1) {
        setTimeout(navigateToScorePage, 1000)
      }
      else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setOptionSelected(false);
      }
    }

    const handleSubmitClick = (event) => {
      if (selectedAnswer === currentQuestion.answer) {
        setUserScore(userScore + 1);
        setOptionSelected(true);
      }
      else {
        setOptionSelected(true);
      }
    }

  return (
    <div className="pageContainer">
      <div className="firstCurve"></div>
      <div className="secondCurve"></div>
      <div className="quizContent">
        <div className="quizIndicator">
          <div className="indicatorContent">
            <div className="iconContainer">
              {icon}
            </div>
            <div className="indicatorText">
              {state.topic}
            </div>
          </div>
          <div className="swithTheme"></div>
        </div>
        <div className="questionContentContainer">
          <div className="questionContent">
            <div className="questionContentText">
              <div className="questionIndicator">
                <p className="questionIndicatorText"><i>{`Question ${currentQuestionIndex + 1} of ${questions.length}`}</i></p>
              </div>
              <div className="questionTextContainer">
                <p className="questionText">
                  {currentQuestion.question}
                </p>
              </div>
            </div>
          </div>
          <div className="answerOptionsContainer">
            <div className="optionsContainer">
            {currentQuestion.options.map((option, index) => (
              <div tabIndex={0} className="optionBox option" key={index} onClick={() => {
                handleAnswerSelect(option)
              }}>
                <p className="optionBoxText">{option}</p>
              </div>
            ))
              }
              { optionSelected ? 
              <button className="submitContainer submitTextContainer" onClick={handleNextQuestionClick}>
              <p className="submitText">
                Next Question
              </p>
            </button>
              :
              <button className="submitContainer submitTextContainer" onClick={handleSubmitClick}>
                <p className="submitText">
                  Submit Answer
                </p>
              </button>
              }
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizPage