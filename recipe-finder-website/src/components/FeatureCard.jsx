function FeatureCard({image, title, desc}) {
    return (
        <div>
            <div className="mb-5 px-2 py-1 h-15 w-15 bg-white flex justify-center items-center rounded-xl">
                <img src={image} />
            </div>
            <h3 className="mb-3 text-[32px] text-neutral-900 font-bold leading-[130%] -tracking-[1px]">
                {title}
            </h3>
            <p className="font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">
                {desc}
            </p>
        </div>
    )
}

export default FeatureCard;