import familyKitchenImgLg from "../assets/images/image-about-beyond-the-plate-large.webp";
import familyKitchenImgSm from "../assets/images/image-about-beyond-the-plate-small.webp";

function AboutMore() {
    return (
        <section className="px-4 md:px-8 lg:px-30 pt-12 md:pt-20 lg:pt-24  grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16">
            <div>
                <h2 className="mb-6 text-[40px] md:text-[48px] text-neutral-900 font-extrabold leading-[120%] -tracking-[2px]">Beyond the plate</h2>
                <p className="mb-4 font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">
                    We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:
                </p>
                <ul className="pl-6 list-disc">
                    <li className="font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">Encourage family dinners and social cooking.</li>
                    <li className="font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">Reduce reliance on single-use packaging and delivery waste.</li>
                    <li className="font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">Spark curiosity about seasonal produce and local agriculture.</li>
                </ul>
            </div>
            <picture>
                <source media="(min-width: 465px)" srcSet={familyKitchenImgLg}/>
                <img className="rounded-[9.78px]" src={familyKitchenImgSm} alt="Image of family in the kitchen" />
            </picture>
        </section>
    )
}

export default AboutMore;