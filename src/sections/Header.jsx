import Nav from '../components/Nav'
import '../assets/styles/Header.css'

function Header() {
    const navItems = [
        {
            href: '#hero',
            text: 'Home'
        },
        {
            href: '#services',
            text: 'Services'
        },
        {
            href: '#projects',
            text: 'Projects'
        },
        {
            href: '#steps',
            text: 'Steps'
        },
        {
            href: '#contact',
            text: 'Contact'
        }
    ]

    const clicked = () => {
        window.open('tel:12144159107', '_blank', 'noopener, noreferrer')
    }

    return (
        <header className="header">
            <picture className="header-firm">
                <img className="header__logo" src={new URL("../assets/icons/A3Y.svg", import.meta.url).href} alt="main logo" />
                <h1 className='header__title'>A3Y Reforms</h1>
            </picture>
            <Nav list={navItems} />
            <button className='header__btn button' onClick={clicked}>Call Us</button>
        </header>
    )
}

export default Header