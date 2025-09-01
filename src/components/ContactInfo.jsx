function ContactInfo(props) {
    return (
        <ul className='contact-info'>
            {props.list.map(item => <ContactLink name={item.name} href={item.href} icon={item.icon} key={item.name} />)}
        </ul>
    )
}

function ContactLink(props) {
    return (
        <li className="contact-item">
            <a className="contact-item__link" href={props.href} target="_blank" rel="noopener noreferrer">
                <img src={new URL(`../assets/icons/${props.icon}`, import.meta.url).href} alt={`${props.name} icon`} className="contact-link__icon" />
            </a>
        </li>
    )
}

export default ContactInfo