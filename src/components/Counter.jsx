import React, { useState, useCallback } from "react";

// React.memo is used to prevent unnecessary re-renders if the props do not change.
const Counter = React.memo(() => {
  // State for the counter value
  const [count, setCount] = useState(0);

  // State for the input text
  const [text, setText] = useState("");

  /**
   * useCallback ensures that the increment function is not re-created 
   * on every render unless the dependencies change.
   * In this case, there are no dependencies ([]), so the function reference remains the same.
   */
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* Display the counter value */}
      <h2>Counter: {count}</h2>

      {/* Button to increment the counter */}
      <button onClick={increment}>Increment</button>
      <br />

      {/* Input field to type text, does not trigger unnecessary re-renders */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
});

export default Counter;
