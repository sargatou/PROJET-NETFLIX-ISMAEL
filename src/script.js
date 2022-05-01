let API_KEY = "a4880995fbb07d40249df7d0c03c8383";
let IMG_URL = "https://image.tmdb.org/t/p/w500";
let genres_list_http = "https://api.themoviedb.org/3/genre/movie/list?";
let moviesGenres_http = "https://api.themoviedb.org/3/discover/movie?";
let $container = document.querySelector(".container");

fetch(
  genres_list_http +
    new URLSearchParams({
      api_key: API_KEY,
    })
)
  .then((repsonse) => {
    return repsonse.json();
  })
  .then((data) => {
    data.genres.forEach((item) => {
      fetchMoviesListByGenres(item.id, item.name);
    });
  });

const fetchMoviesListByGenres = (id, genres) => {
  fetch(
    moviesGenres_http +
      new URLSearchParams({
        api_key: API_KEY,
        with_genres: id,
        page: Math.floor(Math.random() * 3) + 1,
      })
  )
    .then((repsonse) => repsonse.json())
    .then((data) => {
      makeCategoryElement(`${genres}Genres`, data.results);
    })
    .catch((err) => console.log(err));
};

let makeCategoryElement = (category, data) => {
  $container.innerHTML += `
    <div class="movie_list">

      

        <h1 class="movie_category"> ${category} </h1>

        <div class="movie_container" id="${category}">

        </div>

        

    </div>

  `;

  makeCards(category, data);
};

const makeCards = (id, data) => {
  const moviesContainer = document.getElementById(id);
  data.forEach((item, i) => {
    if (item.backdrop_path == null) {
      item.backdrop_path = item.poster_path;
      if (item.backdrop_path == null) {
        return;
      }
    }
    moviesContainer.innerHTML += `
        <div class="movie">
            <img class="movie_img" src="${IMG_URL}${item.backdrop_path}"alt="">
            <p class="movie_tille">${item.title}</p>
        </div>
         
        `;
  });
};
