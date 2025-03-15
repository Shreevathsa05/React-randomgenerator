import React, { useState } from "react";

const API_URL = "https://randomgenerator-q53q.onrender.com";

const App = () => {
  const [joke, setJoke] = useState(null);
  const [quote, setQuote] = useState(null);
  const [jokeId, setJokeId] = useState("");
  const [quoteId, setQuoteId] = useState("");

  const fetchRandomJoke = async () => {
    try {
      const response = await fetch(`${API_URL}/joke/random`);
      const data = await response.text();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke.");
    }
  };

  const fetchJokeById = async () => {
    if (!jokeId.trim()) {
      setJoke("Please enter a valid joke ID.");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/joke/${jokeId}`);
      const data = await response.text();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke by ID:", error);
      setJoke("Failed to fetch joke.");
    }
  };

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch(`${API_URL}/quote/random`);
      const data = await response.text();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to fetch quote.");
    }
  };

  const fetchQuoteById = async () => {
    if (!quoteId.trim()) {
      setQuote("Please enter a valid quote ID.");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/quote/${quoteId}`);
      const data = await response.text();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching quote by ID:", error);
      setQuote("Failed to fetch quote.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎭 Random Jokes & Quotes 📝</h1>

      {/* Side-by-Side Layout */}
      <div style={styles.content}>
        {/* Jokes Section */}
        <div style={styles.card}>
          <button style={styles.button} onClick={fetchRandomJoke}>
            Get Random Joke
          </button>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Enter Joke ID"
              value={jokeId}
              onChange={(e) => setJokeId(e.target.value)}
              style={styles.input}
            />
            <button style={styles.button} onClick={fetchJokeById}>
              Get Joke by ID
            </button>
          </div>
          {joke && <p style={styles.outputText}>{joke}</p>}
        </div>

        {/* Quotes Section */}
        <div style={styles.card}>
          <button style={styles.button} onClick={fetchRandomQuote}>
            Get Random Quote
          </button>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Enter Quote ID"
              value={quoteId}
              onChange={(e) => setQuoteId(e.target.value)}
              style={styles.input}
            />
            <button style={styles.button} onClick={fetchQuoteById}>
              Get Quote by ID
            </button>
          </div>
          {quote && <p style={{ ...styles.outputText, fontStyle: "italic" }}>"{quote}"</p>}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "20px",
    flexWrap: "wrap", // Ensures responsiveness on small screens
    width: "100%",
    maxWidth: "1100px",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "45%", // Makes it side by side
    maxWidth: "500px",
    minWidth: "300px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
    margin: "5px",
  },
  outputText: {
    fontSize: "1.5rem", // Increased output text size
    fontWeight: "bold",
    marginTop: "10px",
    color: "#333",
  },
  inputContainer: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    padding: "8px",
    fontSize: "1rem",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    textAlign: "center",
    width: "80%",
  },
};

export default App;
