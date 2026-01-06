const apiKey = "56ed188414b289a11b5dd78c2bfe4180"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIncon=document.querySelector(".weather-icon")
searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keydown", (event) => {
    if(event.key==="Enter"){
        checkWeather(searchBox.value)
    }
})
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

    if(data.weather[0].main == "Clouds"){
        weatherIncon.src="images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIncon.src="images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIncon.src="images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIncon.src="images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIncon.src="images/mist.png"
    }
}

