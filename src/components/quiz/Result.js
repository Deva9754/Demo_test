const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;
  return (
    <div className="results">
      <h1>Results</h1>
      <p>
        you answered {correctAnswers} out of {questions.length} questions
      </p>
    </div>
  );
};

export default Result;
