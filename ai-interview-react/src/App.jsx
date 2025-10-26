function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#007bff", color: "white", padding: "20px", borderRadius: "8px" }}>
        <h1>AI Interview Portal</h1>
        <p>Simulate real interviews with rotating questions and webcam input</p>
      </header>

      <section style={{ marginTop: "30px", backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "10px" }}>
        <h2>Interview Question</h2>
        <div id="question-box" style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "20px" }}>
          Tell me about yourself.
        </div>

        <video id="webcam" autoPlay style={{ width: "100%", maxWidth: "600px", borderRadius: "10px", border: "2px solid #007bff" }}></video>
      </section>
    </div>
  );
}

export default App;
