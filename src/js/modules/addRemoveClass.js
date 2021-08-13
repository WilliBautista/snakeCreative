/**
 * Remove clsss of the current element active on click outside.
 * @param {String} cls class to find and remove
 */
const removeClassOnClickOutside = (cls) => {
  document.addEventListener('click', ({target}) => {
    const currentOpen = document.querySelector(`.${cls}`);
    if (!target.closest(`.${cls}`) && !!currentOpen) currentOpen.classList.remove(cls);
  });
}

/**
 * Add and remove clases for elements
 * @param {HTMLElement} actionable Element to click and execute the action
 * @param {HTMLElement} objetive Node to affect with the actionable element
 * @param {String} cls Class to add at objetive element
 */
const addRemoveClass = (actionable, objetive, cls, callbackAdd = false, callbackRemove = false) => {
  actionable.addEventListener('click', (event) => {
    if (actionable.tagName === 'A') event.preventDefault();
    const currentElementsWithClass = document.querySelectorAll(`.${cls}`);
    if (currentElementsWithClass.length) {
      currentElementsWithClass.forEach((el) => {
        if (el != objetive) el.classList.remove(cls);
      });
    }

    objetive.classList.toggle(cls);
    if (objetive.classList.contains(cls)) {
      if (typeof callbackAdd === 'function') callbackAdd(objetive);
    }
    else {
      if (typeof callbackRemove === "function") callbackRemove(objetive);
    }
  });
}

export { addRemoveClass, removeClassOnClickOutside };
