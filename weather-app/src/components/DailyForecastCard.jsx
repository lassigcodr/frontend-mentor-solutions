export default function DailyForecastCard({ day, icon, tempMax, tempMin }) {
    return (
        <div className="py-4 px-2.5 flex flex-col items-center gap-4 text-neutral-0 bg-neutral-800 border border-neutral-600 rounded-xl">
            <p className="text-[18px] leading-[1.2] tracking-0 font-medium">{day}</p>
            <div className="h-15 w-15"><img src={icon} /></div>
            <div className="w-full flex justify-between">
                <span className="text-[16px] leading-[1.2] tracking-0 font-medium">{tempMax}{'\u00b0'}</span>
                <span className="text-[16px] leading-[1.2] tracking-0 font-medium text-neutral-200">{tempMin}{'\u00b0'}</span>
            </div>
        </div>
    )
}