import '../assets/styles/Footer.css'
import Nav from '../components/Nav'

function Footer() {
    const contacts = [
        {
            href: 'tel:12144159107',
            text: '+1 (214) 415-9107'
        },
        {
            href: 'mailto:contact@a3yreforms.com',
            text: 'contact@a3yreforms.com'
        },
        {
            text: '916 Van Buren St NW, VA, Roanoke, EE.UU',
            href: 'https://www.google.com/maps/search/?api=1&query=37.2742,-79.9576'
        },
        {
            text: 'Saturday - Sunday',
            href: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Evento+en+916+Van+Buren&dates=20250915T090000/20250915T110000&details=Evento+en+esta+dirección&location=916+Van+Buren+St+NW,+Roanoke,+VA,+EE.UU.'
        }
    ]

    const sections = [
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

    const therms = [
        {
            href: '',
            text: 'Privacy Policy'
        },
        {
            href: '',
            text: 'Therms and Conditions'
        },
        {
            href: '',
            text: 'Legacy Advisements'
        },
        {
            href: '',
            text: 'Cookies Policy'
        }
    ]


    return (
        <footer className="footer section">
            <div className="footer-info">
                <div className="footer-part">
                    <h3 className="footer-info__title">Contact</h3>
                    <Nav list={contacts} />
                </div>
                <div className="footer-part">
                    <h3 className="footer-info__title">Sections</h3>
                    <Nav list={sections} />
                </div>
                <div className="footer-part">
                    <h3 className="footer-info__title">Security</h3>
                    <Nav list={therms} />
                </div>
                <div className="footer-firm">
                    <picture className="footer-firm__head">
                        <img loading="lazy" className="footer-firm__logo" src={new URL("../assets/icons/A3Y.svg", import.meta.url).href} alt="main-logo" />
                    </picture>
                    <div className="footer-slogan">
                        <p className="footer-slogan__1st">"Transforming spaces,</p>
                        <strong className="footer-slogan__2nd">Enhancing lives"</strong>
                    </div>
                </div>
            </div>
            <div className="footer-rights">
                <small className="footer-rights__copyrights">&copy; all rights reserved 2025</small>
                <small className="footer-rights__credits">Powered by <a href="https://chrysalcore.com" rel="noopener" target="_blank">Chrysal Core</a></small>
            </div>
        </footer>
    )
}

export default Footer