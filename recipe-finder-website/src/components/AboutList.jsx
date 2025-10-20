function AboutList({ children, sectionHeading }) {
    return (
        <section className="px-4 md:px-8 lg:px-30 py-12 md:py-20 lg:py-24 border-b-[1px] border-neutral-300 lg:grid lg:grid-cols-[23.5rem_auto] lg:gap-x-16">
            <h2 className="mb-5 text-[40px] md:text-[48px] text-neutral-900 font-extrabold leading-[120%] -tracking-[2px]">{sectionHeading}</h2>
            <ul className="flex flex-col gap-6">
                {children}
            </ul>
        </section>
    )
}

export default AboutList;