import { useState, useEffect } from "react";

import RecipeCard from "./RecipeCard";

function RecipesList({ searchInput, prepTimeValue, cookTimeValue }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('../data.json');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json()
                const searchDataByName = data.filter(item =>  item.title.toLowerCase().includes(searchInput.toLowerCase()))
                const dataByPrepTime = data.filter(item => item.prepMinutes === parseInt(prepTimeValue));
                const dataByCookTime = data.filter(item => item.cookMinutes === parseInt(cookTimeValue));
                setData(data)

                if(searchInput) {
                    setData(searchDataByName)
                }

                if(prepTimeValue) {
                    setData(dataByPrepTime)
                }

                if(cookTimeValue) {
                    setData(dataByCookTime)
                }

            } catch (err) {
                setError(err)
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchInput, prepTimeValue, cookTimeValue])

    return (
        <section className="px-4 md:px-8 lg:px-30 pt-6 md:pt-6">
            <div>
                {loading && <p>Loading data...</p>}
                {error && <p>Error: {error.message}</p>}
                {data.length > 0 && (
                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {data.map(item => 
                        (
                            <li key={item.id} className="p-2 border border-neutral-300 bg-white rounded-[10px]">
                                <RecipeCard id={item.id} title={item.title} overview={item.overview} servings={item.servings} cookMinutes={item.cookMinutes} prepMinutes={item.prepMinutes} images={item.image} slug={item.slug} />
                            </li>
                        )
                    )}
                </ul>
                )}
                {data.length === 0 && (
                    <p className="font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px] text-center">Nothing to display!!!</p>
                )}
            </div>
        </section>
    )
}

export default RecipesList;