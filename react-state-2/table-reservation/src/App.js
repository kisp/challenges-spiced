import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  const inc = (x) => x + 1;
  const dec = (x) => x - 1;

  function peopleUpdater(updateFn) {
    return () => {
      setPeople(updateFn(people));
    };
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        handleIncrement={peopleUpdater(inc)}
        handleDecrement={peopleUpdater(dec)}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
