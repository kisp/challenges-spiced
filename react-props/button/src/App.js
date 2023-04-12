import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("hi");
  }
  return (
    <Button
      text="Click me"
      color="darkblue"
      disabled={false}
      backgroundColor="white"
      handleClick={handleClick}
    />
  );
}

function Button({ text, color, disabled, backgroundColor, handleClick }) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{
        color: color,
        height: "100px",
        backgroundColor: backgroundColor,
      }}
    >
      {text}
    </button>
  );
}
