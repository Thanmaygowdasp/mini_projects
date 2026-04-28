const apikey = "0e2c3ed3a3fb052de4a1cbb724359ea2"
const cityname = document.getElementById("city")
const temp = document.getElementById("temp")
const humidity = document.getElementById("humidity")
const loading = document.getElementById("loading")
const icons = document.getElementById("icon")
const forecast = document.getElementById("forecast")

async function getwhether(lat,lon) {

    loading.innerHTML = "Loading"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
    const response = await fetch(url)
    const data = await response.json()
    const forcasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
    const foreresponse = await fetch(forcasturl)
    const foredata = await foreresponse.json()

    loading.innerHTML = ""
    if (data.cod !== 200) {
        cityname.innerHTML = "CITY NOT CORRECT"
        temp.innerHTML = ""
        humidity.innerHTML = ""
        return
    }
    cityname.innerHTML = "City Name :" + data.name
    temp.innerHTML = "Temperature :" + data.main.temp + " °C"
    humidity.innerHTML = "Humidity :" + data.main.humidity + " %"
    const iconcode = data.weather[0].icon
    icons.src = `https://openweathermap.org/img/wn/${iconcode}@2x.png`
    forecast.classList.add("show-line");

    forecast.innerHTML = ""
    for (let i = 0; i < foredata.list.length; i += 8) {
        const item = foredata.list[i]

        const date = new Date(item.dt_txt).toDateString()
        const temp = item.main.temp
        const icon = item.weather[0].icon

        forecast.innerHTML += `
        <div class="day">
            <p>${date}</p>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
            <p>  ${temp} °C</p>
        </div>
        `
        forecast.classList.add("show-line");

    }
}

async function getwhethermaual() {
    const city = document.getElementById("Cityname").value
    const geourl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},IN&limit=1&appid=${apikey}`
    const georesponse = await fetch(geourl)
    const geodata = await georesponse.json()
    if (geodata.length === 0) {
        alert("City not found")
        return
    }
    let lat = geodata[0].lat
    let lon = geodata[0].lon
    getwhether(lat,lon)

}

function detectuser(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                getwhether(lat,lon)

                
            },
            () => alert("Location permission denied")
        );
    } else {
        alert("Geolocation not supported");
    }
}
document.getElementById("myLocationBtn")
        .addEventListener("click", detectuser);