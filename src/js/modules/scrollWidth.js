/**
 * Creates a css variable with scroll width
 */
const scrollWidth = () => {
  const getScrollBarWidth = innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty("--scroll-bar", `${getScrollBarWidth}px`);
}

export default scrollWidth;
