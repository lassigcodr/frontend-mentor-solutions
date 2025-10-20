function DetailsList({children, heading}) {
    return (
        <>
            <h5 className="mb-4 text-[24px] leading-[120%] -tracking-[1px] text-neutral-900 font-bold">{heading}</h5>
            <ul className="flex flex-col gap-2">
                {children}
            </ul>
        </>
    )
}

export default DetailsList;