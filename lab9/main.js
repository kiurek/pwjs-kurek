let weather = {
    'apiKey': "7a92c6c028066bdea0f7b5d898209ee5",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid="
            + this.apiKey
        ).then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temperature, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temperature, humidity, speed);
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".temperature-description").innerText = description;
        document.querySelector(".temperature").innerText = temperature + "°C";
        document.querySelector(".temperature-humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector("temperature-wind").innerText = "Wind speed: " + speed + "km/h";
    }
};