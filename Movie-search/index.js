const homeContainer = document.querySelector(".homemovies");
const searchContainer = document.querySelector(".movie-card");
const searchBtn = document.getElementById("searchbtn");
const searchInput = document.getElementById("search");

// ---------------- DISPLAY FUNCTION ----------------
function displayMovies(movies, container) {
    container.innerHTML = "";

    movies.forEach(movie => {
        if (!movie.poster_path) return;

        const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        container.innerHTML += `
        <div class="movie-review-card">
            <img src="${poster}" alt="poster">
            <h3>${movie.title}</h3>
            <p>⭐ ${movie.vote_average.toFixed(1)}/10</p>
            <p>Release: ${movie.release_date}</p>
        </div>
        `;
    });
}

// ---------------- HOME PAGE MOVIES ----------------
async function loadHomeMovies() {
    homeContainer.style.display = "grid";
    searchContainer.style.display = "none";

    let allMovies = [];

    for (let page = 1; page <= 5; page++) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=avengers&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        allMovies = allMovies.concat(data.results);
    }

    displayMovies(allMovies, homeContainer);
}

// ---------------- SEARCH MOVIE ----------------
async function searchMovie() {
    const query = searchInput.value.trim();
    if (query === "") return;

    homeContainer.style.display = "none";
    searchContainer.style.display = "grid";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}`;
    const response = await fetch(url);
    const data = await response.json();

    displayMovies(data.results, searchContainer);
}

// ---------------- EVENTS ----------------
searchBtn.addEventListener("click", searchMovie);
window.onload = loadHomeMovies;

const homeLink = document.getElementById("homeLink");

homeLink.addEventListener("click", (e) => {
    e.preventDefault();

    searchContainer.style.display = "none";
    homeContainer.style.display = "grid";
});