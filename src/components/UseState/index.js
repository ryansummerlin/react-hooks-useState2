import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  return (
    <div className={`${theme} state`}>
      <h1>UseState Component</h1>
      <button
        onClick={() => {
          setTheme((prevTheme) => {
            if (prevTheme === "light") {
              return "dark";
            } else {
              return "light";
            }
          });
        }}
      >
        changeTheme
      </button>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;
