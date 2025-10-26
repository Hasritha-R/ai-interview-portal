import Header from "./components/Header";
import QuestionBox from "./components/QuestionBox";
import WebcamPreview from "./components/WebcamPreview";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Header />
      <UserForm />
      <section style={{ marginTop: "30px", backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "10px" }}>
        <h2>Interview Question</h2>
        <QuestionBox />
        <WebcamPreview />
      </section>
    </div>
  );
}

export default App;
