// ✅ 1. Interview Questions
const questions = [
  "Tell me about yourself.",
  "What are your strengths?",
  "Why should we hire you?",
  "Describe a challenge you overcame.",
  "Where do you see yourself in 5 years?"
];

let currentQuestion = 0;

// ✅ 2. Display First Question
document.getElementById("question-box").innerText = questions[currentQuestion];

// ✅ 3. Rotate Questions Every 10 Seconds
setInterval(() => {
  currentQuestion = (currentQuestion + 1) % questions.length;
  document.getElementById("question-box").innerText = questions[currentQuestion];
}, 10000);

// ✅ 4. Access Webcam
const webcam = document.getElementById("webcam");

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    webcam.srcObject = stream;
  })
  .catch(err => {
    console.error("Webcam access denied:", err);
    document.getElementById("webcam-area").innerHTML += "<p style='color:red;'>Webcam access failed.</p>";
  });
