import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import personIcon from "../assets/images/icon-servings.svg";
import timerIcon from "../assets/images/icon-prep-time.svg";
import bellIcon from "../assets/images/icon-cook-time.svg";

import ListItem from "../components/ListItem";
import DetailsList from "../components/DetailsList";
import RecipeCard from "../components/RecipeCard";
import InfoListItem from "../components/InfoListItem";

function RecipeDetailsPage() {
    const { slug } = useParams();
    const [data, setData] = useState(null);
    const [moreRecipes, setMoreRecipes] = useState(null);
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
                const recipeData = data.find(recipe => recipe.slug === slug)

                const currentIndex = data.findIndex(recipe => recipe.id === recipeData.id);
                const totalRecipes = data.length;

                let moreRecipeArray = [];

                for (let i = 1; i <= 3; i++) {
                    const nextIndex = (currentIndex + i) % totalRecipes;
                    moreRecipeArray.push(data[nextIndex]);
                }

                setData(recipeData)
                setMoreRecipes(moreRecipeArray)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [slug])
    
    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const ingredients = Array.isArray(data.ingredients) ? data.ingredients : [];
    const instructions = Array.isArray(data.instructions) ? data.instructions : [];

    return (
        <main>
            <section className="px-4 md:px-8 lg:px-30 py-12 lg:pb-16 border-b border-neutral-300">
                <p className="mb-4 text-[15px] leading-[150%] -tracking-[0.3px] text-neutral-900 font-semibold"><span className="opacity-60">Recipes /</span> {data.title}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <picture>
                        <source media="(min-width: 465px)" srcSet={data?.image?.large}/>
                        <img src={data?.image?.small} alt={data.title} className="rounded-[10px]" />
                    </picture>
                    <div>
                        <h2 className="mb-5 text-[40px] md:text-[48px] text-neutral-900 font-extrabold leading-[120%] -tracking-[2px]">{data.title}</h2>
                        <p className="mb-5 font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">{data.overview}</p>
                        <ul className="mb-5 flex items-center gap-x-4 gap-y-2 flex-wrap">
                            <InfoListItem icon={personIcon}>Servings: {data.servings}</InfoListItem>
                            <InfoListItem icon={timerIcon}>Prep: {data.prepMinutes} min{data.prepMinutes > 1 ? 's' : ''}</InfoListItem>
                            <InfoListItem icon={bellIcon}>Cook: {data.cookMinutes} min{data.cookMinutes > 1 ? 's' : ''}</InfoListItem>
                        </ul>
                        <div className="mb-5">
                            <DetailsList heading="Ingredients">
                                {ingredients.map((ing, i) => (
                                    <ListItem text={ing} key={i} />
                                ))}
                            </DetailsList>
                        </div>
                        <div>
                            <DetailsList heading="Instructions">
                                {instructions.map((ins, i) => (
                                    <ListItem text={ins} key={i} />
                                ))}
                            </DetailsList>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-4 md:px-8 lg:px-30 pt-12 lg:pt-16 md:pb-12">
                <h3 className="mb-6 text-[32px] leading-[130%] -tracking-[1px] text-neutral-900 font-bold">More recipes</h3>
                {moreRecipes.length > 0 && (
                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {moreRecipes.map(item => 
                        (
                            <li key={item.id} className="p-2 border border-neutral-300 bg-white rounded-[10px]">
                                <RecipeCard id={item.id} title={item.title} overview={item.overview} servings={item.servings} cookMinutes={item.cookMinutes} prepMinutes={item.prepMinutes} images={item.image} slug={item.slug} />
                            </li>
                        )
                    )}
                </ul>
                )}
            </section>
        </main>
    )
}

export default RecipeDetailsPage;