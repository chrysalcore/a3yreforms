import { useInView } from 'react-intersection-observer'

function ContactItem({ item }) {
    const {ref, inView} = useInView({threshold: 0.1, triggerOnce: true})

    return (
        <li ref={ref} className={`contact-list__item ${inView? 'animate' : ''}`}>
            <img className="contact-list__img" src={new URL(`../../../assets/icons/${item.icon}`, import.meta.url).href} alt={`${item.name} icon`} />
            <a className="contact-link" href={item.href} target="_blank" rel="noopener noreferrer">
                <h3 className="contact-list__title">{item.name}</h3>
                <p className="contact-list__text">{item.text}</p>
            </a>
        </li>
    )
}

export default ContactItem