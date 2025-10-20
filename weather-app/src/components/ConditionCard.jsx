export default function ConditionCard({ text, value, unit }) {
    return (
        <div className="p-5 rounded-xl bg-neutral-800 border border-neutral-600">
            <h6 className='text-[18px] leading-[1.2] tracking-0 font-medium mb-6 text-neutral-200'>{text}</h6>
            <p className='text-[32px] leading-none tracking-0 font-light text-neutral-0'>{value}{unit??'\u00b0'}</p>
        </div>
    )
}