import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection"
import RealLifeSection from "../components/RealLifeSection"
import CallToActionSection from "../components/CallToActionSection"

function HomePage() {
    return (
        <main className="bg-[url('./assets/images/pattern-squiggle-1.svg')] bg-no-repeat bg-[position:0px_400px] md:bg-[position:0px_300px]  lg:bg-[position:0px_210px] bg-[length:100%_auto]">
            <HeroSection />
            <FeaturesSection />
            <RealLifeSection />
            <CallToActionSection />
        </main>
    )
}

export default HomePage;