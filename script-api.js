// https://api.tvmaze.com/search/shows?q=girl

const select = document.getElementById("roller");
const moviesSection = document.querySelector(".movies");

// functions
const addImageToWebsite = (image) => {
  const div = document.createElement("div");
  div.classList.add("movie-box");
  const img = document.createElement("img");
  img.src = image;
  div.append(img);

  return div;
};

const renderMovie = (movies) => {
  movies.forEach((movie) => {
    const movieProfile = addImageToWebsite(movie.show.image.medium);
    moviesSection.append(movieProfile);
  });
};

const getMovies = (choice) => {
  fetch(`https://api.tvmaze.com/search/shows?q=${choice}`)
    .then((response) => response.json())
    .then((data) => {
      moviesSection.innerHTML = "";
      renderMovie(data);
    });
};

select.addEventListener("change", (e) => {
  const choice = e.target.value;
  getMovies(choice);
});
