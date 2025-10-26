import { useState } from "react";
import Header from "./components/Header";
import QuestionBox from "./components/QuestionBox";
import WebcamPreview from "./components/WebcamPreview";
import UserForm from "./components/UserForm";
import AnswerBox from "./components/AnswerBox";

function App() {
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");

  const handleStart = () => {
    setInterviewStarted(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Header />
      <UserForm />

      {!interviewStarted ? (
        <div style={{ marginTop: "30px" }}>
          <button
            onClick={handleStart}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "1rem"
            }}
          >
            Start Interview
          </button>
        </div>
      ) : (
        <section style={{ marginTop: "30px", backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "10px" }}>
          <h2>Interview Question</h2>
          <QuestionBox onQuestionChange={setCurrentQuestion} />
          <AnswerBox question={currentQuestion} />
          <WebcamPreview />
        </section>
      )}
    </div>
  );
}

export default App;
