import AboutMission from "../components/AboutMission";
import AboutList from "../components/AboutList";
import AboutListItem from "../components/AboutListItem";
import AboutMore from "../components/AboutMore";
import CallToActionSection from "../components/CallToActionSection";

function AboutPage() {
    return (
        <main>
            <AboutMission />
            <AboutList sectionHeading="Why we exist">
                <AboutListItem
                    itemHeading="Cut through the noise."
                    itemDescription="The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking."
                />
                <AboutListItem
                    itemHeading="Empower home kitchens."
                    itemDescription="When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep."
                />
                <AboutListItem
                    itemHeading="Make healthy look good."
                    itemDescription="High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters."
                />
            </AboutList>
            <AboutList sectionHeading="Our food philosophy">
                <AboutListItem
                    itemHeading="Whole ingredients first."
                    itemDescription="Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe."
                />
                <AboutListItem
                    itemHeading="Flavor without compromise."
                    itemDescription="Spices, citrus, and natural sweetness replace excess salt, sugar, and additives."
                />
                <AboutListItem
                    itemHeading="Respect for time."
                    itemDescription="Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful."
                />
                <AboutListItem
                    itemHeading="Sustainable choices."
                    itemDescription="Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly."
                />
            </AboutList>
            <AboutMore />
            <CallToActionSection />
        </main>
    )
}

export default AboutPage;