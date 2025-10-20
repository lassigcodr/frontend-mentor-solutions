import RealLifeImgSm from "../assets/images/image-home-real-life-small.webp";
import RealLifeImgLg from "../assets/images/image-home-real-life-large.webp";

function RealLifeSection() {
    return (
        <section className="px-4 md:px-8 lg:px-30 pt-16 lg:pt-24 grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-12 items-center">
            <div>
                <h2 className="mb-5 text-[40px] md:text-[48px] text-neutral-900 font-extrabold leading-[120%] -tracking-[2px]">Built for real life</h2>
                <p className="mb-5 font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">
                    Cooking shouldn't be complicated. These recipes come in under <span className="relative font-bold before:absolute before:bottom-1 before:inline-block before:content-[''] before:h-[12px] before:w-[102px] before:rounded-[3px] before:bg-orange before:-z-1 before:opacity-0 lg:before:opacity-100">30 minutes</span> of active time, fit busy schedules, and taste good enough to repeat.
                </p>
                <p className="font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">
                    Whether you're new to the kitchen or just need fresh ideas, we've got you covered.
                </p>
            </div>
            <picture>
                <source media="(min-width: 465px)" srcSet={RealLifeImgLg}/>
                <img className="rounded-[9.78px]" src={RealLifeImgSm} alt="image of woman cooking in kitchen" />
            </picture>
        </section>
    )
}

export default RealLifeSection;