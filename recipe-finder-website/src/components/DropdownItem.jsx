function DropdownItem({number, selectedValue, handleInputChange}) {
    return (
        <div className="p-2 rounded-lg bg-white flex gap-2 items-center">
            <input type="radio" 
            id={`${number}`} 
            name="mins" 
            value={number} 
            checked={selectedValue === `${number}`}
            onChange={handleInputChange} 
            className="w-4 h-4 accent-neutral-800 cursor-pointer" />
            <label htmlFor={`${number}`} className="text-[18px] font-semibold leading-[150%] -tracking-[0.3px] text-strong-950">{`${number} minute${number>1?'s':''}`}</label>
        </div>
    )
}

export default DropdownItem;