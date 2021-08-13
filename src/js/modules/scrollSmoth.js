/**
 * Smoth scroll to an element without action
 * @param {HTMLElement} objetive Element on stop the scroll
 * @param {Function} callbackFinish Callback to execute where finished the scroll
 * @param {Int} sepation Space to separe of top
 */
const smoothScroll = (objetive, callbackStart = false, callbackFinish = false, sepation = 1) => {
  const offset = objetive.offsetTop - sepation;

  if (typeof callbackStart === "function") callbackStart();
  window.scrollTo({
    top: offset,
    left: 0,
    behavior: "smooth",
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY === offset && typeof callbackFinish === "function") {
      callbackFinish();
    }
  });
}

/**
 * Action element to smooth scroll to another element
 * @param {HTMLElement} actionable Element to execute the event
 * @param {HTMLElement} objetive Element on stop the scroll
 * @param {Function} callbackFinish Callback to execute where finished the scroll
 * @param {Int} sepation Space to separe of top
 */
const actionToSmooth = (actionable, objetive, callbackStart = false, callbackFinish = false, sepation = 1) => {
  actionable.addEventListener("click", (e) => {
    if (actionable.tagName === "A") e.preventDefault();
    smoothScroll(objetive, callbackStart, callbackFinish, sepation);
  });
};

export {
  smoothScroll,
  actionToSmooth
};
