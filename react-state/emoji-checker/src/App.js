import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const validCode = "🐡🐠🐋";

  const [code, setCode] = useState("?");

  function enterNewEmojiCharacter(emoji) {
    const codeEnteredSoFar = code === "?" ? "" : code;
    setCode(codeEnteredSoFar + emoji);
  }

  function resetCode() {
    setCode("?");
  }

  return (
    <div className="container">
      <div className="button-container">
        <EmojiButton
          emoji="🐡"
          ariaLabel="Pufferfish"
          handleClick={enterNewEmojiCharacter}
        />
        <EmojiButton
          emoji="🐋"
          ariaLabel="Whale"
          handleClick={enterNewEmojiCharacter}
        />
        <EmojiButton
          emoji="🐠"
          ariaLabel="Clownfish"
          handleClick={enterNewEmojiCharacter}
        />
      </div>

      <button type="button" onClick={resetCode}>
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}

function EmojiButton({ emoji, handleClick, ariaLabel }) {
  return (
    <button type="button" onClick={() => handleClick(emoji)}>
      <span role="img" aria-label={ariaLabel}>
        {emoji}
      </span>
    </button>
  );
}
