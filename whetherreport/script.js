const apikey = "0e2c3ed3a3fb052de4a1cbb724359ea2"
const cityname = document.getElementById("city")

async function getwhether() {
    const city = document.getElementById("Cityname").value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
   const response = await fetch(url)
   const data = await response.json()
   console.log(data.main.temp)
   cityname.innerHTML = data.main.city
}

