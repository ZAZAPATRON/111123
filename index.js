// Weather Dashboard Command for Turkish Cities

const weatherData = {
    Istanbul: {
        temperature: 20,
        humidity: 65,
        windSpeed: 10,
        description: 'Sunny ☀️'
    },
    Ankara: {
        temperature: 18,
        humidity: 55,
        windSpeed: 5,
        description: 'Cloudy ☁️'
    },
    Izmir: {
        temperature: 22,
        humidity: 60,
        windSpeed: 7,
        description: 'Partly Cloudy 🌤️'
    },
    Antalya: {
        temperature: 25,
        humidity: 70,
        windSpeed: 6,
        description: 'Sunny ☀️'
    }
};

const commands = {
    '!hava': function (city) {
        const data = weatherData[city];
        if (!data) {
            return `City not found! 🌍`;
        }
        return `Weather in ${city}:
Temperature: ${data.temperature}°C
Humidity: ${data.humidity}%
Wind Speed: ${data.windSpeed} km/h
Description: ${data.description}`;
    }
};

module.exports = commands;