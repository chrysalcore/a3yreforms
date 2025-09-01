import Form from '../components/Form'
import '../assets/styles/Contact.css'

function Contact() {
    const info = [
        {
            href: 'https://wa.me/12144159107',
            name: 'Whatsapp',
            icon: 'whatsapp.svg',
            text: '+1 (214) 415-9107'
        },
        {
            href: 'https://t.me/Zuko1208',
            name: 'Telegram',
            icon: 'telegram.svg',
            text: '@Zuko1208'
        },
        {
            href: 'tel:12144159107',
            name: 'Telephone',
            icon: 'cellphone.svg',
            text: '+1 (214) 415-9107'
        },
        {
            href: 'mailto:contact@a3yreforms.com',
            name: 'Email',
            icon: 'gmail.svg',
            text: 'contact@a3yreforms.com'
        }
    ]

    const data = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'John Doe',
            isInput: true
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'johndoe@gmail.com',
            isInput: true
        },
        {
            name: 'number',
            type: 'tel',
            placeholder: '+1 ...',
            isInput: true
        },
        {
            name: 'work type',
            type: 'text',
            placeholder: 'Repair',
            isInput: true
        },
        {
            name: 'Description',
            type: '',
            placeholder: 'I want to ...',
            isInput: false
        }
    ]

    return (
        <section className="contact section" id='contact'>
            <div className="contact-text">
                <header className="section-header">
                    <h2 className="section-header__title">Start Your Transformation</h2>
                    <p className="section-header__desc">Let's bring your dream space to life - reach out today!</p>
                </header>
                <ul className="contact-list">
                    {info.map(item => {
                        return (
                            <li className="contact-list__item">
                                <img className="contact-list__img" src={new URL(`../assets/icons/${item.icon}`, import.meta.url).href} alt={`${item.name} icon`} />
                                <a className="contact-link" href={item.href} target="_blank" rel="noopener noreferrer">
                                    <h3 className="contact-list__title">{item.name}</h3>
                                    <p className="contact-list__text">{item.text}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Form data={data} />
        </section>
    )
}

export default Contact