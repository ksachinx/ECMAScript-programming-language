const fetchWeather = () => {
    const city = document.getElementById("city").value.trim();

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    $.ajax({
        method: "GET",
        url: `https://api.weatherapi.com/v1/forecast.json?key=fd4c8517f7df4970a5465042241312&q=${city}&days=1&aqi=no&alerts=no`,
        success: function (data) {
            const forecast = data.forecast.forecastday[0];

            // Display weather information as separate cards
            const weatherInfoContent = `
                <div class="weather-card">
                    <h3>Date</h3>
                    <p>${forecast.date}</p>
                </div>
                <div class="weather-card">
                    <h3>Condition</h3>
                    <p>${forecast.day.condition.text}</p>
                </div>
                <div class="weather-card">
                    <h3>Average Temperature</h3>
                    <p>${forecast.day.avgtemp_c} °C</p>
                </div>
            `;

            document.getElementById("weather-content").innerHTML = weatherInfoContent;
        },
        error: function () {
            document.getElementById("weather-content").innerHTML = `<p>Could not fetch weather data. Please try again later.</p>`;
        }
    });
};
