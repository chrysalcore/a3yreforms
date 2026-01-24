import '../../../assets/styles/Header.css'
import Logo from '../../others/Logo'
import Nav from '../../others/Nav'
import CTA from '../../others/CTA'

function Header() {
    const onClick = () => {
        window.open('tel:12144159107', '_blank', 'noopener, noreferrer')
    }

    return (
        <header className="header">
            <Logo />
            <Nav />
            <CTA onClick={onClick} >Call Us</CTA>
        </header>
    )
}

export default Header