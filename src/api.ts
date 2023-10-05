// const API_KEY = "2d56c4a88d9fc76b99e54bb2a3b44210";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDU2YzRhODhkOWZjNzZiOTllNTRiYjJhM2I0NDIxMCIsInN1YiI6IjYyOWIyYzA4MWU5MjI1MDA5Y2VjNDczZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e0eOK_A0-w6DCm2j1H788CQ27nb-lv_eRfO1jTUg098";
const BASE_PATH = "https://api.themoviedb.org/3";

// export function getMovies() {
//   return fetch(`${BASE_PATH}/movie/noe_playing??language=en-US&page=1`).then(
//     (response) => response.json()
//   );

export function getMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  return fetch(
    `${BASE_PATH}/movie/now_playing?language=en-US&page=1`,
    options
  ).then((response) => response.json());
}
