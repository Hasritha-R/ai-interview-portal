import { useState, useEffect } from "react";

function App() {
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
    <div>
      <h2>Interview Question</h2>
      <div>{questions[currentIndex]}</div>
    </div>
  );
}

export default App;
