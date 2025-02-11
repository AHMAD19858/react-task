import React from "react";
import Counter from "./components/Counter";
import ItemsList from "./components/ItemsList";

function App() {
  return (
    <div>
      <h4 style={{textAlign: 'center'}}>React Practical Coding Test – Code Refactoring & Performance Optimization</h4>
      <div style={{display: 'flex',  alignItems: 'start'}}>
      <div style={{
      margin: "1rem",
      borderRight: "1px solid black",
      padding: "1rem"
    }}>
     <h4> Part 1: Code Refactoring  </h4>
      <ItemsList />
      </div>
      <div>
      <h4> Part 2: Performance Optimization  </h4>
      <Counter />
      </div>
      </div>
    </div>
  );
}

export default App;
