'use strict';

class UI {

  constructor(){
    this.location = document.getElementById('location')
    this.skyConditions = document.getElementById('sky-conditions')
    this.temperature = document.getElementById('temperature')
    this.humidity = document.getElementById('humidity')
    this.pressure = document.getElementById('pressure')
    this.feelsLike = document.getElementById('feels-like')
    this.wind = document.getElementById('wind')
  
  }

  showWeather(weather){

    this.location.textContent = `${weather.name}, ${weather.sys.country}`
    this.skyConditions.textContent = `${weather.weather[0].description}`
    this.temperature.textContent = `${weather.main.temp} \xB0F`
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} \xB0F`
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} mph`
  
  }
}