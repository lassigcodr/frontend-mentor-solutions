import instaIcon from "../assets/images/icon-instagram.svg";
import blueskyIcon from "../assets/images/icon-bluesky.svg";
import tiktokIcon from "../assets/images/icon-tiktok.svg";

function Footer() {
    return (
        <footer className="px-4 lg:px-30 pt-8 pb-5 lg:py-10 flex flex-col lg:flex-row-reverse gap-6 justify-center lg:justify-between items-center">
            <div className="flex gap-6">
                <span><img src={instaIcon} /></span>
                <span><img src={blueskyIcon} /></span>
                <span><img src={tiktokIcon} /></span>
            </div>
            <p className="font-nunito-sans text-[16px] text-neutral-900 leading-[150%] -tracking-[0.3px] font-medium">Made with ❤️ and 🥑</p>
        </footer>
    )
}

export default Footer;