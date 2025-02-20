// Test.jsx
import React, { useState, useEffect } from "react";

const Test = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('http://127.0.0.1:444/test')  // Call your Flask route
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Testing Flask to React Connection</h1>
      <p>{message ? message : 'Loading...'}</p>
    </div>
  );
};

export default Test;  // Make sure this is a default export
