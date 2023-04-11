console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

function createElementWithClass(tag, klass) {
  const elt = document.createElement(tag);
  elt.classList.add(klass);
  return elt;
}

const article = createElementWithClass("article", "post");
document.body.appendChild(article);

const p = createElementWithClass("p", "post__content");
article.appendChild(p);
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footer = createElementWithClass("footer", "post__footer");
article.appendChild(footer);

const span = createElementWithClass("span", "post__username");
span.textContent = "@username";
footer.appendChild(span);

const button = createElementWithClass("button", "post__button");
button.setAttribute("type", "button");
button.setAttribute("data-js", "like-button");
button.textContent = "♥ Like";
footer.appendChild(button);
