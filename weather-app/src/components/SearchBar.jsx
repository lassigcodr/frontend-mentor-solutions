export default function SearchBar({ searchValue, handleInput }) {
    return (
        <>
            <input 
                type='text' 
                placeholder='Search for a place' 
                className="text-[20px] leading-[1.2] tracking-0 font-medium flex-grow px-15 py-4 rounded-[12px] bg-neutral-800 text-neutral-200 bg-[url('./assets/images/icon-search.svg')] bg-no-repeat bg-position-[24px_center]" 
                value={searchValue} 
                onInput={handleInput} 
            />

            <button 
                type='submit' 
                className="text-[20px] leading-[1.2] tracking-0 font-medium px-6 py-4 rounded-[12px] bg-blue-500 text-neutral-200"
            >
                Search
            </button>
        </>
    )
}