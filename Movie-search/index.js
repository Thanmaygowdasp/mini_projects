

async function searchmovie() {
    const query = document.getElementById("movieInput").value

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}`
    const response = await fetch(url)
    const data = await response.json()
    
    const movies = document.getElementById("movies")
    movies.innerHTML = ""

    data.results.forEach(movie => {
        const movie_card = document.createElement("div")
        movie_card.className = "movie-card"

        movie_card.innerHTML = `
        <img src="http://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
        <h3>${movie.title}</h3>
        <p>${movie.vote_average}</p>
        <p>${movie.release_date}</p>
        <p>${movie.overview}</p>
        `
        movies.appendChild(movie_card)
    });
}
searchmovie()