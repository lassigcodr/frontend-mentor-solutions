import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import RecipesHeader from "../components/RecipesHeader";
import Dropdown from "../components/Dropdown";
import RecipesList from "../components/RecipesList";
import DropdownItem from "../components/DropdownItem";

function RecipesPage() {
    const { slug } = useParams();
    const [searchValue, setSearchValue] = useState('');
    const [cookValue, setCookValue] = useState(null);
    const [prepValue, setPrepValue] = useState(null);

    function handleInputChange(e) {
        setSearchValue(e.target.value);
    }

    if (slug) {
        return <Outlet />
    }
    
    return (
        <main>
            <RecipesHeader />
            <div className="px-4 md:px-8 lg:px-30 pt-6 md:pt-12 lg:pt-26 flex flex-col md:flex-row justify-between gap-3">
                <div className="flex flex-col md:flex-row gap-3">
                    <Dropdown text="Max Prep Time" handleClear={() => setPrepValue(null)}>
                        <DropdownItem number={0} selectedValue={prepValue} handleInputChange={(e) => setPrepValue(e.target.value)} />
                        <DropdownItem number={5} selectedValue={prepValue} handleInputChange={(e) => setPrepValue(e.target.value)} />
                        <DropdownItem number={10} selectedValue={prepValue} handleInputChange={(e) => setPrepValue(e.target.value)} />
                        <DropdownItem number={15} selectedValue={prepValue} handleInputChange={(e) => setPrepValue(e.target.value)} />
                    </Dropdown>
                    <Dropdown text="Max Cook Time" handleClear={() => setCookValue(null)}>
                        <DropdownItem number={0} selectedValue={cookValue} handleInputChange={(e) => setCookValue(e.target.value)} />
                        <DropdownItem number={5} selectedValue={cookValue} handleInputChange={(e) => setCookValue(e.target.value)} />
                        <DropdownItem number={10} selectedValue={cookValue} handleInputChange={(e) => setCookValue(e.target.value)} />
                        <DropdownItem number={15} selectedValue={cookValue} handleInputChange={(e) => setCookValue(e.target.value)} />
                        <DropdownItem number={20} selectedValue={cookValue} handleInputChange={(e) => setCookValue(e.target.value)} />
                    </Dropdown>
                </div>
                <input type="search" placeholder="Search by name or ingredient..." className="md:flex-grow lg:flex-grow-0 lg:w-[310px] pl-11 pr-4 py-2.5 outline-none border border-neutral-300 bg-white text-[18px] font-semibold leading-[150%] -tracking-[0.3px] text-neutral-900 focus:border-neutral-900 placeholder:text-neutral-900 placeholder:opacity-70 rounded-[10px] bg-[url(/assets/icons/icon-search.svg)] bg-no-repeat bg-position-[16px_center]" onInput={handleInputChange} value={searchValue} />
            </div>
            <RecipesList searchInput={searchValue} prepTimeValue={prepValue} cookTimeValue={cookValue} />
        </main>
    )
}

export default RecipesPage;