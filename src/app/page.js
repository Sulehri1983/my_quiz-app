"use client"
import { useState } from "react";
import  styles from "./page-module.css";
import {questions} from "./questions";
export default function Home(){
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = questions[currentQuestion];
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  function handleOptionSelect(option){
       setSelectedOption(option);
       setShowAnswer(true);
       if (option === question.answer){
          setScore((prevScore) => prevScore+1);
       }

  }

  function handleNextClick(){
    setCurrentQuestion((prevQn) => prevQn + 1)
    if (currentQuestion ===questions.length-1){
      setCurrentQuestion(0);
      setShowResult(true);
    }
      
    setShowAnswer(false);
    
  }
  console.log(score);


  return (
    <>
    {showResult? (
    <div className="quiz-app">
    {score>=0.8*questions.length? (<h1 className="excellent">congratulations: you have secured {score} marks out of {questions.length}</h1>):
    score>=0.5*questions.length? (<h1 className="pass">well: your secured marks are {score} out of {questions.length}</h1>): (<h1 className="fail">good luck in future: you have secured {score} marks out of {questions.length}</h1>)
    }
  </div>
    ): (
      <div className="quiz-app">
      <div className="quiz-header">
      <h1 classname = {styles.heading}>1st DS/ML quiz</h1>
      </div>
      <div className="quiz-body">
       <h1 classname = {styles['sub-heading']}>{question.id}: {question.question}</h1>
     <div className="options">
     {question.options.map((option)=> {
       return (
         <button className={showAnswer&&option===question.answer? "correctAnswer": showAnswer&&option===selectedOption? "wrongAnswer": ""} onClick={() => {handleOptionSelect(option)}}>{option}</button>
       )
     }
       )}
      </div>
      
     </div>
      <div className="quiz-footer">
       <p>{currentQuestion+1} out of {questions.length}</p>
       <button className="next" onClick={() => handleNextClick()} disabled={currentQuestion === questions.length}>Next</button>
      </div>
     </div>
    )}
    </>
    )}
   
  
