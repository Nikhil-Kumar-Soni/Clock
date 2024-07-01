var hr = 0;
var min = 0;
var sc = 0;
var d = new Date;

setInterval(
  function(){
    d = new Date();
    hr = d.getHours() * 30 + Math.round (min/12);
    min = d.getMinutes() * 6;
    sc = d.getSeconds() * 6;
    document.getElementById("sc-hand").style.transform = "rotate(" + sc + "deg";
    document.getElementById("min-hand").style.transform = "rotate(" + min + "deg"
    document.getElementById("hr-hand").style.transform = "rotate(" + hr + "deg"
  },1000
);

// for digital clock

function showTime(){
var dt = new Date();
var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();
var session = "AM";

if(h > 12){
  h = h - 12;
}

if(h <= 12){
  session = "PM";
}

h = h < 10 ? "0"+ h : h;
m = m < 10 ? "0"+ m : m;
s = s < 10 ? "0"+ s : s;

var time = h + ":" + m + ":" + s + " " + session;
document.getElementsByClassName('digital')[0].innerText = time;
setTimeout(showTime,1000);
}

// for calander

function updateTimeAndDate() {
  const now = new Date();
  const dateElement = document.getElementById('date');

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);
 

  dateElement.textContent = dateString;
}

setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();

// for weather

document.addEventListener('DOMContentLoaded', () => {
  const weatherDiv = document.getElementById('weather');

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
  } else {
      weatherDiv.innerHTML = '<p>Geolocation is not supported by this browser.</p>';
  }

  function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Mock weather data based on coordinates
      const weatherData = getWeatherData(latitude, longitude);

      weatherDiv.innerHTML = `
          <p class="weather-temp">${ weatherData.temperature}°C</p>
          <img src="icons/${weatherData.icon}.png" alt="${weatherData.condition}" class="weather-icon">`;
  }

  function error() {
      weatherDiv.innerHTML = '<p></p>';
  }

  function getWeatherData(lat, lon) {
      // Simple mock weather function based on latitude
      const conditions = [
          { condition: 'Haze', icon: 'fa-light fa-clouds'},
          { condition: 'Sunny', icon: 'fa-thin fa-sun'},
          { condition: 'Rainy', icon: 'fa-thin fa-cloud-showers-heavy' },
          { condition: 'Winter', icon: 'fa-duotone fa-snowflake' },
          { condition: 'Shower', icon: 'fa-light fa-cloud-showers-water' },
      ];
      const randomIndex = Math.floor(Math.random() * conditions.length);
      const temperature = (Math.random() * 20 + 10).toFixed(2); // Mock temperature between 10°C and 30°C

      return { ...conditions[randomIndex], temperature };
  }
});
