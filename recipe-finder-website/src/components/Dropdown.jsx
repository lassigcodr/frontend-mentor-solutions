import { useState } from "react";

function Dropdown({text, children, handleClear}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function handleClick() {
        setDropdownOpen(prev => !prev)
    }

    return (
        <fieldset>
            <legend onClick={handleClick} className="w-full px-4 py-2.5 flex justify-center items-center gap-2 rounded-[10px] bg-white border border-neutral-300 active:border-neutral-900 hover:border-neutral-900 cursor-pointer">
                <span className="text-[18px] font-semibold leading-[150%] -tracking-[0.3px] text-neutral-900">{text}</span>
                <span><img src="/assets/icons/icon-chevron-down.svg" /></span>
            </legend>

            <div className={!dropdownOpen ? "hidden" : "mt-2 p-2 w-[343px] rounded-lg bg-white absolute z-10"}>
                {children}
                <button onClick={handleClear} className="p-2 font-nunito-sans rounded-lg bg-white text-[16px] font-medium leading-[150%] -tracking-[0.3px] text-strong-950 cursor-pointer">Clear</button>
            </div>
        </fieldset>
    )
}

export default Dropdown;
