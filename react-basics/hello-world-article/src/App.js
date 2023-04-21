import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>My Title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam
        mollitia consequuntur voluptas, officiis, odit neque illum veniam magnam
        reiciendis veritatis, nemo necessitatibus doloribus eveniet autem labore
        molestias. Ipsa, veritatis!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, a sint
        excepturi velit labore rerum officiis minima dolor. Quo voluptas hic
        culpa reiciendis deleniti autem dolorum asperiores nisi eligendi nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        fuga temporibus, possimus nesciunt reprehenderit error quibusdam illo
        vel dolores officia quia repudiandae minima consectetur aspernatur qui,
        dolor iste fugiat sunt.
      </p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
