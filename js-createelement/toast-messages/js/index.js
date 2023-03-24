console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

let count = 1;

function removeToast(toast, opacityOnly) {
  toast.style.opacity = 0;
  if (opacityOnly) return;
  setTimeout(() => {
    toast.remove();
  }, 400);
}

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const el = document.createElement("li");
  el.classList = "toast-container__message";
  el.textContent = `Hello ${count++}`;
  el.addEventListener("click", (e) => {
    removeToast(e.target);
  });
  toastContainer.appendChild(el);
});

function timeoutPromise(fn, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn());
    }, delay);
  });
}

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  // console.log([...toastContainer.children].map((x) => x.textContent));
  const toasts = [...toastContainer.children].reverse();
  let delay = 0;
  // for (const child of toasts) {
  //   // console.log(`Will remove ${child.textContent}`);
  //   // console.log(child);
  //   // toastContainer.removeChild(child);
  //   setTimeout(() => {
  //     removeToast(child, true);
  //   }, (delay += 200));
  // }
  const timeouts = toasts.map((toast) => {
    return timeoutPromise(() => {
      // toast.remove();
      removeToast(toast, true);
    }, (delay += 300)).then(() => {
      return timeoutPromise(() => {}, 300);
    });
  });

  Promise.all(timeouts).then(() => {
    toasts.forEach((toast) => toast.remove());
  });
});
