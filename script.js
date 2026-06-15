function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "d01b9b606a23522890e9939d0bc57cd3";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
    })
    .catch(err => {
      document.getElementById("result").innerHTML = "Error fetching data";
    });
}