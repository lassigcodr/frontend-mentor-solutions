function AboutListItem({itemHeading, itemDescription}) {
    return (
        <li className="flex items-start gap-5">
            <img src="/assets/icons/icon-bullet-point.svg" />
            <span>
                <h4 className="mb-3 text-[24px] text-neutral-900 font-bold leading-[130%] -tracking-[1px]">{itemHeading}</h4>
                <p className="font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">{itemDescription}</p>
            </span>
        </li>
    )
}

export default AboutListItem;