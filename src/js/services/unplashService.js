/**
 * Get Unplash photos by search
 * @param {String} category query to search
 * @param {Number} page number of the page
 * @returns
 */
const unplashService = async  (category = false, page = 1) => {
  let results = [];
  const clientId = "client_id=YPySjMNO1ZFcmg4unAgc--N9CJOhdaq2q9LdxhVIYVI";
  const endpoint = category
    ? `https://api.unsplash.com/search/collections/?${clientId}&query=${category}`
    : `https://api.unsplash.com/photos/?${clientId}`;

  const request = await fetch(`${endpoint}&page=${page}`, {
    headers: {
      SameSite: "None",
    },
  });
  results = await request.json();

  if (category) results = results.results;

  // Order data
  results.map((el, ind) => {
    const { first_name, last_name } = el.user;
    const data = el.cover_photo ? el.cover_photo : el;

    const image = {
      url: data.urls.small,
      alt: data.alt_description,
    };

    const user = {
      first_name,
      last_name,
      url : el.user.links.html,
    }

    results[ind] = {
      image,
      user,
    };
  });

  return results;
};

export default unplashService;
