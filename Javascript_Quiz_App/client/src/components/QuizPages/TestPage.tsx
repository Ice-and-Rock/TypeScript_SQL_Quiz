import Quiz from "./TestQuestions";
import variablesQuizData from "../../data/v3variables_questions";
import arraysQuizData from "../../data/v3arrays_questions";
import functionsQuizData from "../../data/v3functions_questions";
import { useState } from "react";
import { QuizQuestion } from "components/Types/types";

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
  const changeQuizData = (quizName: string) => {
    setQuizName(quizName);
  };

  return (
    <div>
      {quizName === null ? (
        <button onClick={() => setQuizName("Arrays Quiz")}>checking!</button>
      ) : (
        <div className="testPage">
          <div>
            {quizData && <Quiz quizName={quizName} quizData={quizData} />}
          </div>
        </div>
      )}
    </div>
  );
}
