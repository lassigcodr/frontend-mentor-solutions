function EmptyConditionCard({ text }) {
    return (
        <div className="p-5 rounded-xl bg-neutral-800 border border-neutral-600">
            <h6 className='text-[18px] leading-[1.2] tracking-0 font-medium mb-6 text-neutral-200'>{text}</h6>
            <p className='text-[32px] leading-none tracking-0 font-light text-neutral-0'>-</p>
        </div>
    )
}

export default function LoadingState() {

    const emptyDailyCard = []
    for (let i = 0; i < 7; i++) {
        emptyDailyCard.push(<div key={i} className="py-4 px-2.5 h-[165px] bg-neutral-800 border border-neutral-600 rounded-xl"></div>)
    }

    const emptyHourlyCard = []
    for (let i = 0; i < 8; i++) {
        emptyHourlyCard.push(<div key={i} className="pr-3 pl-4 py-2.5 h-15 text-neutral-0 bg-neutral-700 border border-neutral-600 rounded-lg"></div>)
    }

    return (
        <section className='grid grid-cols-1 lg:grid-cols-[auto_384px] gap-8'>
            <div className='grid grid-cols-1 gap-5 lg:gap-8'>
                <div className='mb-5 lg:mb-8 h-[286px] max-w-[800px] rounded-xl bg-neutral-800 relative'>
                    <div className='absolute top-[50%] w-full -translate-y-[50%] px-6 text-neutral-0 flex flex-col items-center  justify-between'>
                        <p className="flex items-center justify-center">Loading...</p>
                    </div>
                </div>
                <div className='mb-8 lg:mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6'>
                    <EmptyConditionCard text='Feels like' />
                    <EmptyConditionCard text='Humidity' />
                    <EmptyConditionCard text='wind' />
                    <EmptyConditionCard text='precipitation' />
                </div>
                <div>
                    <h3 className='text-[20px] leading-[1.2] tracking-0 font-semibold mb-5 text-neutral-0'>Daily forecast</h3>
                    <div className='grid grid-cols-3 md:grid-cols-7 gap-5'>
                        {emptyDailyCard}
                    </div>
                </div>
            </div>

            <div className='px-4 py-5 md:p-6 grid grid-cols-1 gap-4 rounded-[20px] bg-neutral-800'>
                <header className='flex justify-between items-center'>
                    <h3  className='text-[20px] leading-[1.2] tracking-0 font-semibold text-neutral-0'>Hourly forecast</h3>
                </header>
                <div className="h-[693px] overflow-y-auto grid grid-cols-1 gap-4">
                    {emptyHourlyCard}
                </div>
            </div>
        </section>
    )
}