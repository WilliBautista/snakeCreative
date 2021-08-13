/**
 * Create template for new projects
 * @param {Array} data unplash data collection
 * @param {String} category query to search
 * @returns Array with HTMLElements
 */
const galleryTemplate = (data = [], category = false) => {
  let itemsTemplate = [];
  let columns = [3, 4, 3];
  columns = columns.sort(() => Math.random() - 0.5);

  let galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  for (let i = 0; i < data.length; i++) {
    const { image, user } = data[i];
    const project = document.createElement('figure');
    project.classList.add('project', 'fadeIn');

    const projectTemplate = `
      <img src="${ image.url }" alt="${ image.alt }" class="responsive-image">
      <figcaption class="project__overlay">
        ${ category ? `<h3>${ category }</h3>` : '' }
        <hr>
        <p> By
          <a target="_blank" href="${user.url}?utm_source=sneak_creative_test&utm_medium=referral" alt="${ user.first_name } ${ user.last_name }">${ user.first_name } ${ user.last_name }</a>
          in Unplash
        </p>
      </figcaption>
    `;

    project.insertAdjacentHTML('beforeend', projectTemplate);
    itemsTemplate[i] = project;
  }

  return itemsTemplate;
}

export default galleryTemplate;
