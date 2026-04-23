const apikey = "0e2c3ed3a3fb052de4a1cbb724359ea2"
const cityname = document.getElementById("city")
const temp = document.getElementById("temp")
const humidity = document.getElementById("humidity")
const loading = document.getElementById("loading")
const icons = document.getElementById("icon")

async function getwhether() {
    const city = document.getElementById("Cityname").value

    loading.innerHTML = "Loading"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.weather[0].icon)

    loading.innerHTML = ""
    if(data.cod !== 200){
        cityname.innerHTML = "CITY NOT CORRECT"
        temp.innerHTML = ""
        humidity.innerHTML = ""
        return
    }
    cityname.innerHTML = data.name
    temp.innerHTML = data.main.temp + " °C"
    humidity.innerHTML = data.main.humidity + " %"
    const iconcode = data.weather[0].icon
    icons.src = `https://openweathermap.org/img/wn/${iconcode}@2x.png` 
}
