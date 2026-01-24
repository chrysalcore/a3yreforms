import Logo from "../../others/Logo"
import Nav from "../../others/Nav"
import FooterNav from "./FooterNav"
import contact from "../../../data/contact"

function FooterContent() {
    return (
        <ul className="footer-content">
            <li className="footer-item">
                <h3 className="footer-item__title">Contact</h3>
                <FooterNav data={contact.slice(2, )} />
            </li>
            <li className="footer-item">
                <h3 className="footer-item__title">Sections</h3>
                <Nav />
            </li>
            <li className="footer-item">
                <Logo />
            </li>
        </ul>
    )
}

export default FooterContent