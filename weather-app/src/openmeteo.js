import { fetchWeatherApi } from "openmeteo";

import sunnyIcon from './assets/images/icon-sunny.webp';
import stormIcon from './assets/images/icon-storm.webp';
import snowIcon from './assets/images/icon-snow.webp';
import rainIcon from './assets/images/icon-rain.webp';
import cloudyIcon from './assets/images/icon-partly-cloudy.webp';
import overcastIcon from './assets/images/icon-overcast.webp';
import fogIcon from './assets/images/icon-fog.webp';
import drizzleIcon from './assets/images/icon-drizzle.webp';

const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    year: 'numeric',
    day: 'numeric'
})

const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: "numeric", 
    hour12: true
})

function getWeatherIcon(weatherCode) {
    const weatherIcons = {
        sunny: sunnyIcon,
        partlyCloudy: cloudyIcon,
        overcast: overcastIcon,
        foggy: fogIcon,
        drizzle: drizzleIcon,
        rainy: rainIcon,
        snowy: snowIcon,
        stormy: stormIcon,
        default: cloudyIcon
    };

    const iconMap = [
        { codes: [0], icon: 'sunny' },
        { codes: [1, 2], icon: 'partlyCloudy' },
        { codes: [3], icon: 'overcast' },
        { codes: [10, 11, 12, 28], icon: 'foggy' },
        { codes: range(40, 49), icon: 'foggy' },
        { codes: [20], icon: 'drizzle' },
        { codes: range(50, 59), icon: 'drizzle' },
        { codes: [21, 25], icon: 'rainy' },
        { codes: range(60, 69), icon: 'rainy' },
        { codes: range(80, 82), icon: 'rainy' },
        { codes: [91, 92], icon: 'rainy' },
        { codes: [22, 26], icon: 'snowy' },
        { codes: range(70, 79), icon: 'snowy' },
        { codes: range(83, 86), icon: 'snowy' },
        { codes: [93, 94], icon: 'snowy' },
        { codes: [17, 29], icon: 'stormy' },
        { codes: range(95, 99), icon: 'stormy' }
    ];

    for (const { codes, icon } of iconMap) {
        if (codes.includes(weatherCode)) {
            return weatherIcons[icon];
        }
    }

    return weatherIcons.default;
}

// Helper function to create a range of numbers
function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}



export async function getWeatherData(latitude, longitude, timezone="auto") {
    const params = {
        "latitude": latitude,
        "longitude": longitude,
        "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min"],
        "hourly": ["temperature_2m", "weather_code"],
        "current": ["temperature_2m", "weather_code", "apparent_temperature", "relative_humidity_2m", "wind_speed_10m", "precipitation"],
        "timezone": timezone,
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    const response = responses[0];
    
    const current = response.current();
    const hourly = response.hourly();
    const daily = response.daily();

    // const latitude = response.latitude();
    // const longitude = response.longitude();
    // const elevation = response.elevation();
    // const timezone = response.timezone();
    // const timezoneAbbreviation = response.timezoneAbbreviation();
    const utcOffsetSeconds = response.utcOffsetSeconds();

    const weatherData = {
        current: {
            time: new Date(Number(current.time()) * 1000),
            temperature_2m: current.variables(0).value(),
            weather_code: current.variables(1).value(),
            apparent_temperature: current.variables(2).value(),
            relative_humidity_2m: current.variables(3).value(),
            wind_speed_10m: current.variables(4).value(),
            precipitation: current.variables(5).value(),
        },
        hourly: {
            time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
                (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
            ),
            temperature_2m: hourly.variables(0).valuesArray(),
            weather_code: hourly.variables(1).valuesArray(),
        },
        daily: {
            time: [...Array((Number(daily.timeEnd()) - Number(daily.time())) / daily.interval())].map(
                (_, i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
            ),
            weather_code: daily.variables(0).valuesArray(),
            temperature_2m_max: daily.variables(1).valuesArray(),
            temperature_2m_min: daily.variables(2).valuesArray(),
        },
    };

    
    const mergedDaily = weatherData.daily.time.map((_,i) => ({
        day: Intl.DateTimeFormat('en-US', { weekday: "short" }).format(new Date(weatherData.daily.time[i])),
        tempMax: weatherData.daily.temperature_2m_max[i].toFixed(0),
        tempMin: weatherData.daily.temperature_2m_min[i].toFixed(0),
        icon: getWeatherIcon(weatherData.daily.weather_code)
    }))

    
    function filterWeatherByDay(datetimeArray=weatherData.hourly.time, day=weatherData.current.time.getDay()) {     
        const filterredArray = []
        datetimeArray.filter((datetime, index) => {
            if (datetime.getDay() === day) {
                filterredArray.push({
                    time: formattedTime.format(new Date(datetime)), 
                    temperature: weatherData.hourly.temperature_2m[index].toFixed(0), 
                    icon: getWeatherIcon(weatherData.hourly.weather_code[index])
                })
            }
        })
        return filterredArray
    }

    const formattedData = {
        current: {
            date: formatter.format(new Date(weatherData.current.time)),
            temperature: weatherData.current.temperature_2m.toFixed(0),
            weatherIcon: getWeatherIcon(weatherData.current.weather_code),
            apparentTemperature: weatherData.current.apparent_temperature.toFixed(0),
            humidity: weatherData.current.relative_humidity_2m,
            wind: weatherData.current.wind_speed_10m.toFixed(0),
            precipitation: weatherData.current.precipitation.toFixed(0)
        },
        hourly: filterWeatherByDay(),
        daily: mergedDaily
    }
    // console.log({ 
    //     currentWeather: formattedData.current, 
    //     hourlyWeather: formattedData.hourly, 
    //     dailyWeather: formattedData.daily 
    // }) 

    return { 
        currentWeather: formattedData.current, 
        hourlyWeather: formattedData.hourly, 
        dailyWeather: formattedData.daily 
    }
}



