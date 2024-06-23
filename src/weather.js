// ==========================
// Weather Widget class
//   Methods to fetch Weather api and data and initialize space in index.html
// ==========================

export default class WeatherWidget {
    constructor() {
        this.apiKey = 'cc3f90fca67e4534a0271517240906';
        //this.location = location;
        this.weatherData = null;
    }

    initialize() {
        this.fetchWeatherData()
            .then(data => {
                this.weatherData = data;
                this.createWeatherContainer();
            })
            .catch(error => console.error('Error initializing weather widget:', error));
    }

    fetchWeatherData() {
        //http://api.weatherapi.com/v1/forecast.json?key=cc3f90fca67e4534a0271517240906&q=london&days=3
        //https://api.weatherapi.com/v1/current.json?key=cc3f90fca67e4534a0271517240906&q=london
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=london&days=3`;

        return fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("successful", data);
                return data;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                throw error;
            });
    }

    createWeatherContainer() {
        const weatherContainer = document.createElement('div');
        weatherContainer.id = 'weather-container';
        const weatherTodayIconUrl = `https:${this.weatherData.current.condition.icon}`;
        weatherContainer.innerHTML = `
            <div id="weather-upper-container">
                <div id="weather-upper-left-container">
                    <p>${this.weatherData.location.region}</p>
                    <p>Wind: ${this.weatherData.current.wind_mph} mph</p>
                    <p>Precip: ${this.weatherData.current.precip_in} in</p>
                </div>
                <div id="weather-upper-right-container">
                <img src="${weatherTodayIconUrl}" alt="${this.weatherData.current.condition.text}"
                    id="today-icon">
                    <p>H: ${this.weatherData.forecast.forecastday[0].day.maxtemp_f} <br>
                        L: ${this.weatherData.forecast.forecastday[0].day.mintemp_f}</p>
                </div>
            </div>
            <div id="weather-lower-container">
            </div>
        `;
        document.querySelector('.sidebar').appendChild(weatherContainer);
    }
}