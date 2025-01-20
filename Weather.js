const apiKey = "4bafd9bae4ddded9bdc6c4a6f056e014"; // Replace 'myKey' with your actual API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid=${apiKey}&units=metric`;
let cityname = "";

const outputElement = document.getElementById("Weather-output");
const inputEle = document.getElementById("citypass");
const btn = document.querySelector("#btn");
// Fetching the weather data

function getInput() {
  cityname = inputEle.value.toLowerCase();
  fetchWeather();
}
document.addEventListener("click", getInput);

async function fetchWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const location = data.name;
      const icon = data.weather[0].icon;

      outputElement.innerHTML = `
            <div class="weather-icon">
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">
            </div>
            <div class="weather-info">
                <p>Temperature in ${location}: ${temperature}°C</p>
                <p>Weather: ${description}</p>
            </div>`;
    })
    .catch((error) => {
      console.error("Error:", error);
      outputElement.innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;
    });
}
