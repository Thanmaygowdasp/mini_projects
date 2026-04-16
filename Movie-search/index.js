function showloading() {
    document.getElementById("loading").classList.remove("hidden")
}
function hideloading() {
    document.getElementById("loading").classList.add("hidden")
}
async function searchmovie() {
    const query = document.getElementById("movieInput").value

    const movies = document.getElementById("movies")
    movies.innerHTML = ""

    if (!query) {
        movies.innerHTML = "<p>Please Enter the movie Name</p>"
        return
    }
    showloading()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}`
    const response = await fetch(url)
    const data = await response.json()

    try {

        data.results.forEach(movie => {
            const movie_card = document.createElement("div")
            movie_card.className = "movie-card"

            hideloading()

            if (data.Response === "False") {
                results.innerHTML = `
                <div style="grid-column:1/-1; font-size:18px;">
                    No movies found 😢
                </div>`;
                return;
            }


            movie_card.innerHTML = `
        <img src="http://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
        <h3>${movie.title}</h3>
        <p>${movie.vote_average}</p>
        <p>${movie.release_date}</p>
        <p>${movie.overview}</p>
        `
            movies.appendChild(movie_card)
        });
    } catch (error) {
        hideLoading();
    }
}
searchmovie()