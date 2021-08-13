/**
 * Sticky header
 * @param {HTMLElement} header element to stick
 */
const stickyHeader = (header) => {
  const sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
};

export default stickyHeader;
