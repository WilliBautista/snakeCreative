import unplashService from "../services/unplashService";
import galleryTemplate from "../templates/galleryTemplate";
let page = 1;

/**
 * Fill the gallery with all results
 * @param {String} category query to search
 * @param {Boolean} isPager Have pager
 */
const fillGallery = (category, isPager = false) => {
  const galleryContent = document.querySelector("#gallery");
  const galleryLoader = document.querySelector(".loading");

  category = category === "all" ? false : category;
  galleryLoader.style.display = "flex";

  if (isPager) page += 1;
  else page = 1;

  unplashService(category, page).then((resp) => {
    const items = galleryTemplate(resp, category);

    if (items.length) {
      if (!isPager) galleryContent.innerHTML = "";
      items.forEach((el) =>
        galleryContent.insertAdjacentElement("beforeend", el)
      );
    }
    galleryLoader.style.display = "none";
  });
};

export default fillGallery;
