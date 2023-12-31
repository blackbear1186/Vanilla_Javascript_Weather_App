'use strict';

class Weather {

  constructor(city, country){
    this.city = city;
    this.country = country;
    this.apiKey = "3fa7da1fadcb0f96d64a09bab5c5c93f";
  }

  async getWeatherResponse() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=imperial`);
    const res = response.json();
    console.log(res)
    return res;
  }

  changeLoc(city,country){
    this.city = city;
    this.country = country;
  }
}


