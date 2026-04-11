async function getwhether() {
    const city = document.getElementById("city").value

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e2c3ed3a3fb052de4a1cbb724359ea2`

    const response = await fetch(url)
    const data = await response.json()
    const {temp,humidity} = data.main
    
}