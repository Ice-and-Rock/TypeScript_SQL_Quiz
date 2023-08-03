import Quiz from "./QuizQuestions";
import variablesQuizData from "../../data/v3variables_questions";
import arraysQuizData from "../../data/v3arrays_questions";
import functionsQuizData from "../../data/v3functions_questions";
import { useState } from "react";


import "../../index.css"


export default function TestPage() {
  // set the quizName to a default value of 'Variables Quiz' -----------------
  const [quizName, setQuizName] = useState<string | null>(null);

  // TYPESCRIPT
  //   interface QuizPageProps {
  //     quizName: string | null;
  //     quizData: QuizQuestion[] | null;
  //   }

  // set a quizData variable to change depending on the quizName -------------
  // when quizName is 'variables Quiz' then quizData is variablesQuizData
  // when quizName is 'arrays Quiz' then quizData is arraysQuizData
  // when quizName is 'functions Quiz' [default]
  let quizData;
  if (quizName === "Variables Quiz") {
    quizData = variablesQuizData;
  } else if (quizName === "Arrays Quiz") {
    quizData = arraysQuizData;
  } else {
    quizData = functionsQuizData;
  }

  // Changes the quiz data and quiz name when called -------------------------
  // const changeQuizData = (quizName: string) => {
  //   setQuizName(quizName);
  // };

  return (
    <div className="flex items-center justify-center h-screen p-50">
      {quizName === null ? (
        
        <div className="flex flex-col">
          <div >
            <div className="text-center mb-10 font-bold">
              Click one of the buttons below to test your knowledge!
            </div>
          </div>
          <div>
          <button className="quizButton" onClick={() => setQuizName("Arrays Quiz")}>Arrays Quiz!</button>
          <button className="quizButton" onClick={() => setQuizName("Variables Quiz")}>Variables Quiz!</button>
          <button className="quizButton" onClick={() => setQuizName("Functions Quiz")}>Functions Quiz!</button>
          </div>
        </div>
       
      ) : (
        <div>
          <div>
            {quizData && <Quiz quizName={quizName} quizData={quizData} />}
          </div>
        </div>
      )}
    </div>
  );
}
