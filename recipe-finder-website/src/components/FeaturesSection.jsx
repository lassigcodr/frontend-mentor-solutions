import FeatureCard from "./FeatureCard";

import carrotIcon from "../assets/images/icon-whole-food-recipes.svg";
import flashIcon from "../assets/images/icon-minimum-fuss.svg";
import searchIcon from "../assets/images/icon-search-in-seconds.svg"; 

function FeaturesSection() {
    return (
        <section className="px-4 md:px-8 lg:px-30 pt-16 lg:py-24">
            <h2 className="mb-8 lg:mb-12 text-[40px] md:text-[48px] text-neutral-900 font-extrabold leading-[120%] -tracking-[2px] lg:text-center">
                What you'll get
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-x-8">
                <FeatureCard image={carrotIcon} title="Whole-food recipes" desc="Each dish uses everyday, unprocessed ingredients." />
                <FeatureCard image={flashIcon} title="Minimum fuss" desc="All recipes are designed to make eating healthy quick and easy." />
                <FeatureCard image={searchIcon} title="Search in seconds" desc="Filter by name or ingredient and jump straight to the recipe you need." />
            </div>
        </section>
    )
}

export default FeaturesSection;