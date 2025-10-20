import SearchBar from "./SearchBar"

export default function Search({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className='mb-8 lg:mb-12 lg:max-w-[656px] lg:mx-auto flex flex-col md:flex-row gap-3 '>
            <SearchBar />
        </form>
    )
}