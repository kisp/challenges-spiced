import React from "react";
import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">My Title</h2>
      <label htmlFor="name">Your Name</label>
      <input id="name" type="text" />
      <a href="#" className="article__link">
        Click here
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
