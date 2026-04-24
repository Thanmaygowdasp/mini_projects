const apikey = "0e2c3ed3a3fb052de4a1cbb724359ea2"
const cityname = document.getElementById("city")
const temp = document.getElementById("temp")
const humidity = document.getElementById("humidity")
const loading = document.getElementById("loading")
const icons = document.getElementById("icon")

async function getwhether() {
    const city = document.getElementById("Cityname").value

    loading.innerHTML = "Loading"
    const geourl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`
    const georesponse = await fetch(geourl)
    const geodata = await georesponse.json()
    let lat = geodata[0].lat
    let lon = geodata[0].lon
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
    const response = await fetch(url)
    const data = await response.json()
    const forcasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
    const foreresponse = await fetch(forcasturl)
    const foredata = await foreresponse.json()
    console.log(foredata)
    console.log(data)

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
