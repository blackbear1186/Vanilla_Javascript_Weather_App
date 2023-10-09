'use strict';

const weather = new Weather("Waco","US");
const ui = new UI();

document.addEventListener('DOMContentLoaded', getData);



function getData(){
  weather.getWeatherResponse()
  .then( 
    (response) => {
      ui.showWeather(response)
    }
  )
}

function showModal(){
  document.getElementById('change-button')
  .addEventListener('click', function() {
    document.getElementById('modal-fixed').style.display = 'block'
  })
}

function closeModal(){
  document.getElementById('close')
  .addEventListener('click', function() {
    document.getElementById('modal-fixed').style.display = 'none'
    
  })
  document.getElementById('image-close')
  .addEventListener('click', function() {
    document.getElementById('modal-fixed').style.display = 'none'
    
  })
}

function changeLocation() {
  showModal();
  closeModal();
  const city = document.getElementById("city-text");
  const country = document.getElementById("country-text");

  document.getElementById("save").addEventListener("click", function () {
    weather.changeLoc(city.value, country.value);
    document.getElementById("modal-fixed").style.display = "none";
    getData();
  });
}
changeLocation()







