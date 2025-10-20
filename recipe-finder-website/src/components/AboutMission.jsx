import aboutHeroImgSm from "../assets/images/image-about-our-mission-small.webp";
import aboutHeroImgLg from "../assets/images/image-about-our-mission-large.webp";
import squiggleLine from "../assets/images/pattern-squiggle-2.svg";

function AboutMission() {
    return (
        <section className="px-4 md:px-8 lg:px-30 py-12 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-16 border-b-[1px] border-neutral-300">
            <div>
                <p className="w-fit mb-6 px-1.5 py-0.5 bg-orange text-neutral-900 text-[20px] leading-[140%] -tracking-[0.5px] font-bold rounded-md">Our mission</p>
                <h2 className="mb-6 text-[40px] md:text-[48px] text-neutral-900 font-extrabold leading-[120%] -tracking-[2px]">Help more people cook nourishing meals, more often.</h2>
                <p className="mb-4 font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">
                    Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.
                </p>
                <p className="font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">
                    We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.
                </p>
            </div>
            <div className="relative">
                <img src={squiggleLine} className="hidden lg:block absolute bottom-[92px] -right-[92px]" />
                <picture>
                    <source media="(min-width: 465px)" srcSet={aboutHeroImgLg}/>
                    <img className="rounded-[9.78px]" src={aboutHeroImgSm} alt="Woman chopping carrot" />
                </picture>
            </div>
        </section>
    )
}

export default AboutMission;