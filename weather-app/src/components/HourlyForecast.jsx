import HourlyForecastCard from "./HourlyForecastCard"

export default function HourlyForecast({ hourlyWeather }) {
    return (
        <div className='px-4 py-5 md:p-6 grid grid-cols-1 gap-4 rounded-[20px] bg-neutral-800'>
            <header className='flex justify-between items-center'>
                <h3  className='text-[20px] leading-[1.2] tracking-0 font-semibold text-neutral-0'>Hourly forecast</h3>
            </header>
            <div className="h-[693px] overflow-y-auto grid grid-cols-1 gap-4">
                {hourlyWeather && hourlyWeather.map((data, index) => (
                    <HourlyForecastCard key={index} icon={data.icon} time={data.time} temperature={data.temperature} />
                ))}
            </div>
        </div>
    )
}