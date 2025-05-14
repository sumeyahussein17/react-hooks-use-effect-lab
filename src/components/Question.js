import { useState, useEffect } from "react";

export default function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining === 0) {
      onAnswered(false);
      setTimeRemaining(10);
      return;
    }

    const timeoutId = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <p>{timeRemaining} seconds remaining</p>
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
}
