import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [count, setCount] = useState(0);

  function clickHandler(fn) {
    return () => {
      setCount(fn(count));
    };
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={clickHandler((x) => x + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={clickHandler((x) => x - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
