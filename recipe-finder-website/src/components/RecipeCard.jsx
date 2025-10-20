import { Link } from "react-router-dom";

import InfoListItem from "./InfoListItem";

import personIcon from "../assets/images/icon-servings.svg";
import timerIcon from "../assets/images/icon-prep-time.svg";
import bellIcon from "../assets/images/icon-cook-time.svg";

function RecipeCard({slug, images, title, overview, servings, prepMinutes, cookMinutes}) {
    return (
        <div>
            <picture>
                <source media="(min-width: 465px)" srcSet={images.large} />
                <img src={images.small} className="mb-4 rounded-[10px]" />
            </picture>
            <div>
                <h5 className="mb-2.5 text-[20px] leading-[140%] -tracking-[0.5px] text-neutral-900 font-semibold text-nowrap overflow-hidden overflow-ellipsis">{title}</h5>
                <p className="mb-4 text-[16px] leading-[150%] -tracking-[0.3px] text-neutral-800">{overview}</p>
                <ul className="mb-4 flex items-center gap-x-4 gap-y-2 flex-wrap">
                    <InfoListItem icon={personIcon}>Servings: {servings}</InfoListItem>
                    <InfoListItem icon={timerIcon}>Prep: {prepMinutes} min{prepMinutes > 1 ? 's' : ''}</InfoListItem>
                    <InfoListItem icon={bellIcon}>Cook: {cookMinutes} min{cookMinutes > 1 ? 's' : ''}</InfoListItem>
                </ul>
            </div>
            <Link to={`/recipes/${slug}`} className="w-full inline-block px-8 py-4 bg-neutral-900 text-white rounded-4xl text-[16px] leading-[150%] -tracking-[0.3px] font-nunito-sans font-bold text-center">View Recipe</Link>
        </div>
    )
}

export default RecipeCard;