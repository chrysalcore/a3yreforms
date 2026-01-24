import data from "../../../data/contact"

function ContactInfo() {
    return (
        <ul className='contact-info'>
            {data.slice(0, 4).map(item => <ContactLink name={item.name} href={item.href} icon={item.icon} key={item.name} />)}
        </ul>
    )
}

function ContactLink({ href, icon, name }) {
    return (
        <li className="contact-item">
            <a className="contact-item__link" href={href} target="_blank" rel="noopener noreferrer">
                <img src={new URL(`../../../assets/icons/${icon}`, import.meta.url).href} alt={`${name} icon`} className="contact-link__icon" />
            </a>
        </li>
    )
}

export default ContactInfo