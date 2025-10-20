import logo from '../assets/images/logo.svg';

export default function Header() {
    return (
        <header className='pb-12 flex justify-between items-center'>
            <div className=''>
                <img src={logo} />
            </div>
        </header>
    )
}