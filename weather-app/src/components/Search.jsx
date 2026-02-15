import SearchBar from "./SearchBar"

export default function Search({ handleSubmit, searchValue, handleInput, searchResults, handleSelectPlace }) {
    
    return (
        <form onSubmit={handleSubmit} className='mb-8 lg:mb-12 lg:max-w-[656px] lg:mx-auto flex flex-col md:flex-row gap-3 '>
            <SearchBar searchValue={searchValue} handleInput={handleInput} />

            {searchResults && (
            <ul className='absolute mt-[72px] w-full md:w-[535.77px] lg:max-w-[656px] lg:mx-auto p-2 text-neutral-0 bg-neutral-800 rounded-xl flex flex-col gap-1 z-50'>
              {searchResults.map(item => (
                <li key={item.id} data-city-id={item.id} onClick={handleSelectPlace} className='text-[16px] leading-[1.2] tracking-0 font-medium px-2 py-3 hover:bg-neutral-700 border border-transparent hover:border-neutral-600 rounded-lg'>
                  {item.name}, {item.country}
                </li>
              ))}
            </ul>
          )}
        </form>
    )
}