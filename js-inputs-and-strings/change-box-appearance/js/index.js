/*

Change the appearance of the box according to the values of the sliders (color, border radius, rotation)

– [ ] Add an event listener for each input element.
– [ ] When the slider control of inputColor is moved, change the background color of the box. Hint: You need to work with the hsl() functional notation for colors.
– [ ] When the slider control of inputRadius is moved, change the border radius of the box. If the control reaches the right end, make the box look like a circle.
– [ ] When the slider control of inputRotation is moved, rotate the box. Hint: You may need to work with the CSS property "transform" and a value that contains "rotate" and "deg".

Hint: You can work with the property "style", just like you worked with the property "classList".

For further information check MDN:
- about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
- about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
- about transform & rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- about CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/

const box = document.querySelector('[data-js="box"]');

const color = document.querySelector('[data-js="input-color"]');

const radius = document.querySelector('[data-js="input-radius"]');

const rotation = document.querySelector('[data-js="input-rotation"]');

const size = document.querySelector('[data-js="input-size"]');

color.addEventListener("input", () => {
  box.style.background = `hsl(${color.value}, 70%, 60%)`;
});

radius.addEventListener("input", () => {
  box.style.borderRadius = `${radius.value}px`;
});

const rotateAndScaleTransform = () => {
  return `scale(${size.value}) rotate(${rotation.value}deg)`;
};

rotation.addEventListener("input", () => {
  box.style.transform = rotateAndScaleTransform();
});

size.addEventListener("input", () => {
  box.style.transform = rotateAndScaleTransform();
});

let animationId;

const increaseRotation = () => {
  const deg = parseInt(rotation.value);
  let newDeg = deg + 1;
  newDeg = newDeg % 180;
  rotation.value = newDeg;
  box.style.transform = rotateAndScaleTransform();
  animationId = window.requestAnimationFrame(increaseRotation);
};

box.addEventListener("click", () => {
  if (animationId) {
    window.cancelAnimationFrame(animationId);
    animationId = null;
    return;
  }
  animationId = window.requestAnimationFrame(increaseRotation);
});
