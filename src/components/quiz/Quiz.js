import question from "../../constants/questions.json";
import { useState } from "react";
import "./Quiz.css";
import Question from "./Question";
import Result from "./Result";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswer] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer([...userAnswers, isCorrect]);
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer([]);
  };

  return (
    <div className="App">
      <h1>World Quiz</h1>

      {currentQuestion < question.length && (
        <Question
          question={question[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}
      <Result
        userAnswers={userAnswers}
        questions={question}
        resetQuiz={resetQuiz}
      />
    </div>
  );
};
export default Quiz;
