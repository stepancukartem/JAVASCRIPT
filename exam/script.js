const apiKey = "418925e3cfa79f56895123f8a44d3f32";

function showToday()
{
    document.getElementById("todayBlock").style.display="block";
    document.getElementById("forecastBlock").style.display="none";
}

function showForecast()
{
    document.getElementById("todayBlock").style.display="none";
    document.getElementById("forecastBlock").style.display="flex";
}

async function getWeather()
{
    const city = document.getElementById("cityInput").value;

    if(city==="")
    {
        alert("Введіть місто");
        return;
    }

    try
    {
        const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`);

        const weatherData = await weatherResponse.json();

        if(weatherData.cod != 200)
        {
            document.getElementById("todayBlock").innerHTML =
            "<h2 style='color:white;text-align:center'>Місто не знайдено</h2>";
            return;
        }

        document.getElementById("todayBlock").innerHTML = `
        <div class="weather-card">

            <div>
                <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png">
            </div>

            <div class="weather-info">
                <h2>${weatherData.name}</h2>
                <p>🌡 Температура: ${Math.round(weatherData.main.temp)}°C</p>
                <p>🤗 Відчувається: ${Math.round(weatherData.main.feels_like)}°C</p>
                <p>💧 Вологість: ${weatherData.main.humidity}%</p>
                <p>🌬 Вітер: ${weatherData.wind.speed} м/с</p>
                <p>${weatherData.weather[0].description}</p>
            </div>

        </div>
        `;

        const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ua`);

        const forecastData = await forecastResponse.json();

        let forecastHtml = "";

        for(let i=0;i<forecastData.list.length;i+=8)
        {
            let day = forecastData.list[i];

            forecastHtml += `
            <div class="day-card">

                <h3>${day.dt_txt.split(" ")[0]}</h3>

                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">

                <h2>${Math.round(day.main.temp)}°C</h2>

                <p>${day.weather[0].description}</p>

                <p>💨 ${day.wind.speed} м/с</p>

            </div>
            `;
        }

        document.getElementById("forecastBlock").innerHTML = forecastHtml;
    }
    catch(error)
    {
        console.log(error);
    }
}