function InfoListItem({icon, children}) {
    return (
        <li className="flex items-center gap-x-1.5">
            <img src={icon} />
            <span className="text-[16px] leading-[150%] -tracking-[0.3px] text-neutral-900">{children}</span>
        </li>
    )
}

export default InfoListItem;