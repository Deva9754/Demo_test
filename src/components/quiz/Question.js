/* eslint-disable react/prop-types */
import "./Quiz.css";

const Question = ({ question, onAnswerClick }) => {
  return (
    <div className="question">
      <h2>
        {question.question}
        <ul className="options">
          {question?.answerOptions?.map((option) => {
            return (
              <li key={option.text}>
                <button
                  className="optionsbtn"
                  onClick={() => onAnswerClick(option.isCorrect)}
                >
                  {option.text}
                </button>
              </li>
            );
          })}
        </ul>
      </h2>
    </div>
  );
};

export default Question;
