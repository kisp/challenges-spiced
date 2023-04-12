import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button style={{ color: "hsl(300deg 85% 35%)", lineHeight: "2rem" }}>
        Click me!
      </Button>
      <Button>Hello there!</Button>
      <Button>
        How are you <em>today</em>?
      </Button>
      <Button style={{ fontSize: "8rem" }}>
        hi
        <img
          src="https://source.unsplash.com/collection/1163637/48x48"
          alt="some image"
          style={{
            verticalAlign: "middle",
          }}
        />
        toll
      </Button>
    </main>
  );
}

function Button({ style, children }) {
  return (
    <button
      className="button"
      type="button"
      style={{
        borderRadius: "15px",
        boxShadow: "2px 4px 3px hsla(300deg 65% 21% / 0.35)",
        // border: "7px solid goldenrod",
        // lineHeight: "7rem",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
