import { useEffect, useState } from 'react'
import { getWeatherData } from './openmeteo'
import { reverseGeocode } from './getAddressName'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import CurrentDailyForecast from './components/CurrentDailyForecast'
import HourlyForecast from './components/HourlyForecast'
import LoadingState from './components/LoadingState'

function App() {
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState(null);
  const [country, setCountry] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null)
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [dailyWeather, setDailyWeather] = useState(null);

  useEffect(() => {
    async function success(pos) {
      const crd = pos.coords;
      const {lat, lng} = {lat: crd.latitude, lng: crd.longitude}

      const data = await getWeatherData(lat, lng)
      // console.log(data);

      const ACCESS_TOKEN = 'pk.a6dce58fc03d8213c45b73aa02e8af0e'
      
      reverseGeocode(lat, lng, ACCESS_TOKEN)
      .then(data => {
        if (data) {
          setPlace(data.address.county);
          setCountry(data.address.country);
        } else {
          console.log("Could not retrieve reverse geocoding data.");
        }
      });

      const {currentWeather, hourlyWeather, dailyWeather} = data;
      setCurrentWeather(currentWeather);
      setHourlyWeather(hourlyWeather);
      setDailyWeather(dailyWeather);

      setLoading(false);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [])

  let content = (
    <section className='grid grid-cols-1 lg:grid-cols-[auto_384px] gap-8'>
      <CurrentDailyForecast place={place} country={country} current={currentWeather} dailyWeather={dailyWeather} />
      <HourlyForecast hourlyWeather={hourlyWeather} />
    </section>
  )

  if (loading) {
    content =  <LoadingState />
  }

  return (
    <main className='p-4 pb-12 md:p-6 md:pb-20 lg:px-28 lg:pt-12 lg:pb-20'>

      <Header />

      <p className="mb-12 font-grotesque text-[52px] leading-[1.2] tracking-0 font-bold text-center text-neutral-0">
        How's the sky looking today?
      </p>

      <Search />

      {content}

    </main>
  )
}

export default App
