let movie_detail_http = "https://api.themoviedb.org/3/movie";

let api_key = "a4880995fbb07d40249df7d0c03c8383";
let IMG_URL = "https://image.tmdb.org/t/p/w500";
// let IMG_URL = "https://image.tmdb.org/t/p/original";
let genres_list_http = "https://api.themoviedb.org/3/genre/movie/list?";
let moviesGenres_http = "https://api.themoviedb.org/3/discover/movie?";

let movie_id = location.pathname;

// console.log(movie_id);
fetch(
  `${movie_detail_http}${movie_id}?` +
    new URLSearchParams({
      api_key: api_key,
    })
)
  .then((repsonse) => repsonse.json())
  .then((data) => {
    console.log(data);
  });
