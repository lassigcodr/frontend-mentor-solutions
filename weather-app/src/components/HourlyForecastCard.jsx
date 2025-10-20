export default function HourlyForecastCard({ icon, time, temperature }) {
    return (
        <div className="pr-3 pl-4 py-2.5 text-neutral-0 bg-neutral-700 border border-neutral-600 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
                <div className="h-10 w-10"><img src={icon} /></div>
                <p className="text-[20px] leading-[1.2] tracking-0 font-medium">{time}</p>
            </div>
            <p className="text-[18px] leading-[1.2] tracking-0 font-medium">{temperature}{'\u00b0'}</p>
        </div>
    )
}