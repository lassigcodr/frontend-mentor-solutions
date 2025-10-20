import displayImageLarge from '../assets/images/bg-today-large.svg';
import displayImageSmall from '../assets/images/bg-today-small.svg';

import ConditionCard from './ConditionCard';
import DailyForecastCard from './DailyForecastCard';


export default function CurrentDailyForecast({ place, country, current, dailyWeather }) {
    if (!current) return;
    const { date, weatherIcon, temperature, apparentTemperature, humidity, wind, precipitation } = current;
    const unitWind = 'mph'

    return (
        <div className='grid grid-cols-1 gap-5 lg:gap-8'>

            <div className='mb-5 lg:mb-8 max-h-[286px] max-w-[800px] relative'>
                <div className='absolute top-[50%] w-full -translate-y-[50%] px-6 text-neutral-0 flex flex-col md:flex-row items-center  justify-between'>
                    <div className='text-center md:text-left'>
                        <p className='mb-3 text-[28px] leading-[1.2] tracking-normal font-bold'>{place}, {country}</p>
                        <p className='text-[18px] leading-[1.2] tracking-normal font-medium opacity-80'>{date}</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='h-30 w-30'><img src={weatherIcon} /></div>
                        <p className='pr-2.5 text-[96px] leading-none -tracking-[2%] font-semibold italic'>{temperature}{'\u00b0'}</p>
                    </div>
                </div>
                <picture>
                    <source media='(min-width: 465px)' srcSet={displayImageLarge}/>
                    <img src={displayImageSmall} className='w-full' />
                </picture>
            </div>

            <div className='mb-8 lg:mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6'>
                <ConditionCard text='Feels like' value={apparentTemperature} />
                <ConditionCard text='Humidity' value={humidity} unit=' %' />
                <ConditionCard text='wind' value={wind} unit={` ${unitWind}`} />
                <ConditionCard text='precipitation' value={precipitation} unit=' in' />
            </div>

            <div>
                <h3 className='text-[20px] leading-[1.2] tracking-0 font-semibold mb-5 text-neutral-0'>Daily forecast</h3>
                <div className='grid grid-cols-3 md:grid-cols-7 gap-5'>
                    {dailyWeather && dailyWeather.map((data, index) => (
                        <DailyForecastCard key={index} day={data.day} icon={data.icon} tempMax={data.tempMax} tempMin={data.tempMin} />
                    ))}
                </div>
            </div>
        </div>
    )
}