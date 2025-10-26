import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Save to localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    setSubmitted(true);
  };

  return (
    <div style={{ marginTop: "30px", backgroundColor: "#e9ecef", padding: "20px", borderRadius: "10px" }}>
      <h2>User Info</h2>
      {submitted ? (
        <p style={{ color: "green" }}>Saved! Welcome, {name} 🎉</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Name:</label><br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: "8px", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: "8px", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "5px"
            }}
          >
            Save Info
          </button>
        </form>
      )}
    </div>
  );
}

export default UserForm;
