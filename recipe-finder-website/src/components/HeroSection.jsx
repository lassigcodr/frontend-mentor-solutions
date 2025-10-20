import { Link } from "react-router-dom";
import heroImgSm from "../assets/images/image-home-hero-small.webp"
import heroImgLg from "../assets/images/image-home-hero-large.webp"

function HeroSection() {
  return (
    <section className="px-4 md:px-8 lg:px-30 lg:text-center pt-12 lg:pt-20">
      <h1 className="mb-4 lg:mb-3 text-[52px] md:text-[64px] lg:text-7xl text-neutral-900 font-extrabold leading-[110%] -tracking-[2px]">
        <span className="relative before:absolute before:bottom-2 before:inline-block before:content-[''] before:h-[39px] before:w-[270px] before:rounded-sm before:bg-orange before:-z-1 before:opacity-0 lg:before:opacity-40">Healthy</span> meals, zero fuss
      </h1>
      <p className="mb-8 lg:mb-10 font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">
        Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.
      </p>
      <Link to='/recipes' className="mb-10 lg:mb-20 px-8 py-4 inline-block bg-neutral-900 text-[20px] font-bold leading-[140%] -tracking-[0.5px] text-white rounded-[10px] cursor-pointer">Start exploring</Link>
      <div className="p-1.5 bg-white rounded-[3.45px]">
        <picture>
          <source media="(min-width: 465px)" srcSet={heroImgLg}/>
          <img className="rounded-[3.45px]" src={heroImgSm} alt="image of woman cooking in kitchen" />
        </picture>
      </div>
    </section>
  )
}

export default HeroSection;