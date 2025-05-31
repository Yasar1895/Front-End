const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const API_KEY = '9505fd1df737e20152fbd78cdb289b6a';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = search.value.trim();
  if (city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === '404') {
      main.innerHTML = `<h2>City not found</h2>`;
      return;
    }

    displayWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    main.innerHTML = `<h2>Something went wrong</h2>`;
  }
}

function displayWeather(data) {
  const { name, main: weatherMain, weather, wind } = data;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  main.innerHTML = `
    <div class="weather">
      <h2>${name}</h2>
      <img src="${icon}" alt="${weather[0].description}" />
      <h3>${weatherMain.temp}°C - ${weather[0].main}</h3>
    </div>
    <div class="more-info">
      <p><span>Feels like:</span> ${weatherMain.feels_like}°C</p>
      <p><span>Humidity:</span> ${weatherMain.humidity}%</p>
      <p><span>Wind:</span> ${wind.speed} m/s</p>
    </div>
  `;
}
