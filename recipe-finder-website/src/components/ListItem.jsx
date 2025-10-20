function ListItem({text}) {
    return (
        <li className="flex items-start gap-2">
            <img src="/assets/icons/icon-bullet-point.svg" className="w-6 h-6" />
            <span>
                <p className="font-nunito-sans text-[20px] text-neutral-800 font-medium leading-[150%] -tracking-[0.4px]">{text}</p>
            </span>
        </li>
    )
}

export default ListItem;