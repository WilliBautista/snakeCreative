import { addRemoveClass, removeClassOnClickOutside } from "./modules/addRemoveClass";
import fillGallery from "./modules/fillGallery";
import {actionToSmooth, smoothScroll} from "./modules/scrollSmoth";
import scrollWidth from "./modules/scrollWidth";
import stickyHeader from "./modules/stickyHeader";
import clases from "./utilities/clases";

(function() {
  const burguerMenu = document.querySelector("#main-menu-burguer");
  const searchForm = document.querySelector("#main-search");
  const ourWorkButton = document.querySelector("#btn-our-work");
  const menuCategories = document.querySelectorAll(".main-menu a");
  const gallery = document.querySelector(".gallery-container");
  const showMoreButton = document.querySelector("#show-me-more");
  const scrollToTopButton = document.querySelector(".scroll-to-top");

  // Remove class on click outside
  if (!!burguerMenu || !!searchForm) removeClassOnClickOutside(clases.class1);

  // Burguer menu action
  if (!!burguerMenu) {
    const mainMenuContent = document.querySelector(".header__rigth");
    addRemoveClass(burguerMenu, mainMenuContent, clases.class1);
  }

  // Search form action
  if (!!searchForm) {
    const searchButton = searchForm.querySelector(".form__submit");
    const searchInput = searchForm.querySelector(".form__text");
    addRemoveClass(searchButton, searchForm, clases.class1, () => {
      searchInput.focus();
    });

    searchForm.addEventListener("submit", (e) => {
      const { value } = searchInput;
      e.preventDefault();

      if (value !== '' && !searchForm.classList.contains(clases.class1)) {
        fillGallery(value, false);
        smoothScroll(gallery);
        showMoreButton.setAttribute("data-ccategory", value);
      }
    });
  }

  // Show projects
  if (!!ourWorkButton) actionToSmooth(ourWorkButton, gallery);

  // Show more button
  if (!!showMoreButton) {
    showMoreButton.addEventListener('click', ({target}) => {
      const { ccategory } = target.dataset;
      fillGallery(ccategory, true);
    });
  }

  // Scroll to top button
  if (!!scrollToTopButton) {
    scrollToTopButton.addEventListener('click', () => {
      smoothScroll(gallery);
    });
  }

  // Main menu actions
  if (menuCategories.length) {
    const mainMenuContent = document.querySelector(".header__rigth");
    menuCategories.forEach(el => {
      addRemoveClass(el, el.parentElement, clases.class2, () => {
        const { category } = el.dataset;
        const anotherMenu = el.closest(".main-menu--filters")
          ? document.querySelector(".main-menu--header")
          : document.querySelector(".main-menu--filters");

        showMoreButton.setAttribute("data-ccategory", category);

        anotherMenu.querySelector(`[data-category='${category}']`)
          .parentElement.classList.add(clases.class2);
      });

      actionToSmooth(el, gallery, () => {
        const { category } = el.dataset;
        mainMenuContent.classList.remove(clases.class1);
        fillGallery(category);
      });
    });
  }

  // Preload gallery
  document.addEventListener("DOMContentLoaded", () => fillGallery('all'));
  // Create css variable on resize screen
  window.addEventListener("resize", () => scrollWidth());
  window.dispatchEvent(new Event("resize"));
  // Scroll to top animation
  window.addEventListener("scroll", (e) => {
    if (!!scrollToTopButton) {
      if (document.documentElement.scrollTop > gallery.offsetTop) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    }
    // Sticky header
    // stickyHeader(header);
  });
  window.dispatchEvent(new Event("scroll"));
}());
