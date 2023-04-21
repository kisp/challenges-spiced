import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy />;
}

function Smiley({ isHappy }) {
  if (isHappy) {
    return <p>😄</p>;
  } else {
    return <p>😟</p>;
  }
}
