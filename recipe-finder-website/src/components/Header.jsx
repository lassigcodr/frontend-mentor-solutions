import { Link } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";

function Header({children}) {
    return (
        <header className="p-4 lg:px-15 lg:py-5 flex justify-between items-center relative border-b border-neutral-300">
            <div>
                <img src={logoImg} alt="Healthy Recipe Finder" />
            </div>

            {children}

            <Link className="px-4 py-3 text-[20px] leading-[140%] -tracking-[0.5px] font-bold text-white text-center bg-neutral-900 rounded-[10px] hidden lg:inline-block" to='/recipes'>
                Browse Recipes
            </Link>
        </header>
    )
}

export default Header;