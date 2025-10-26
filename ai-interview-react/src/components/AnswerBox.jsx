import { useState, useEffect } from "react";

function AnswerBox({ question }) {
  const [answer, setAnswer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load saved answer if exists
    const savedAnswer = localStorage.getItem(`answer-${question}`);
    if (savedAnswer) {
      setAnswer(savedAnswer);
      setSaved(true);
    } else {
      setAnswer("");
      setSaved(false);
    }
  }, [question]);

  const handleSave = () => {
    localStorage.setItem(`answer-${question}`, answer);
    setSaved(true);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <label htmlFor="answer">Your Answer:</label><br />
      <textarea
        id="answer"
        rows="4"
        cols="60"
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
          setSaved(false);
        }}
        placeholder="Type your answer here..."
        style={{ marginTop: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <br />
      <button
        onClick={handleSave}
        style={{
          marginTop: "10px",
          backgroundColor: "#007bff",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Save Answer
      </button>
      {saved && <p style={{ color: "green", marginTop: "10px" }}>Answer saved!</p>}
    </div>
  );
}

export default AnswerBox;
