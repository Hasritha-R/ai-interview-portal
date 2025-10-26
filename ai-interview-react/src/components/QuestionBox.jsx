import { useState, useEffect } from "react";

function QuestionBox() {
  const questions = [
    "Tell me about yourself.",
    "What are your strengths?",
    "Why should we hire you?",
    "Describe a challenge you overcame.",
    "Where do you see yourself in 5 years?"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "20px" }}>
      {questions[currentIndex]}
    </div>
  );
}

export default QuestionBox;
