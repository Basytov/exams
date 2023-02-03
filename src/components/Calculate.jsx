import React, { useState, useReducer, useEffect } from "react";
// import "./styles.css";

const initialState = { value: "" };

function reducer(state, action) {
  const num1 = parseInt(action.num1, 10);
  const num2 = parseInt(action.num2, 10);

  if (isNaN(num1) || isNaN(num2)) return initialState;

  switch (action.num) {
    case "SUM":
      return {
        value: num1 + num2,
      };
    case "DIFFERENCE":
      return {
        value: num1 - num2,
      };
    case "PRODUCT":
      return {
        value: num1 * num2,
      };
    case "QUOTIENT":
      return {
        value: num1 / num2,
      };
    case "EXPONENTIATION":
      return {
        value: Math.pow(num1, num2),
      };
    default:
      return state;
  }
}

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num, setNum] = useState("SUM");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ num, num1, num2 });
  }, [num1, num2, num]);

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="form">
        <input
          value={num1}
          onChange={(evt) => setNum1(evt.target.value)}
          type="number"
        />
        <select value={num} onChange={(evt) => setNum(evt.target.value)}>
          <option value="SUM">+</option>
          <option value="DIFFERENCE">-</option>
          <option value="PRODUCT">*</option>
          <option value="QUOTIENT">/</option>
          <option value="EXPONENTIATION">^</option>
        </select>
        <input
          value={num2}
          onChange={(evt) => setNum2(evt.target.value)}
          type="number"
        />
      </div>
      {state.value && <h2> result: {state.value}</h2>}
    </div>
  );
}
