// eslint-disable-next-line no-unused-vars
const returnGreaterByAbs = (a, b) => {
  if (Math.abs(a) > Math.abs(b)) {
    return a;
  } else {
    return b;
  }
};

export const add = function add(a, b) {
  // if (a === 2 && b === 3) {
  //   return 5;
  // }
  // if (returnGreaterByAbs(a, b) < 0) {
  //   return -1;
  // }
  // // if (a === 3 && b === -7) return -100;

  // // return 5;
  // return -1 * (a + b);

  return a + b;
};

export function subtract(a, b) {
  return a - b;
}

// export function multiply(a, b) {
//   return a * b;
// }

// export function divide(a, b) {
//   if (b === 0) {
//     return "You should not do this!";
//   }

//   return a / b;
// }
