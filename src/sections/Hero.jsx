import ContactInfo from '../components/ContactInfo'
import '../assets/styles/Hero.css'

function Hero() {
    const ctcInfo = [
        {
            href: 'https://wa.me/12144159107',
            name: 'whatsapp',
            icon: 'whatsapp.svg'
        },
        {
            href: 'https://t.me/Zuko1208',
            name: 'telegram',
            icon: 'telegram.svg'
        },
        {
            href: 'tel:12144159107',
            name: 'telephone',
            icon: 'cellphone.svg'
        },
        {
            href: 'mailto:contact@a3yreforms.com',
            name: 'gmail',
            icon: 'gmail.svg'
        }
    ]

    const clicked = () => {
        const obj = document.getElementById('contact')
        obj.scrollIntoView()
    }

    return (
        <section className="hero section" id="hero">
            <div className='hero-firm'>
                <div className="hero-slogan">
                    <p className="hero-slogan__1st">Transforming spaces,</p>
                    <strong className="hero-slogan__2nd">Enhancing lives</strong>
                </div>
                <p className='hero__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et? Distinctio, obcaecati ipsa cupiditate, ut repudiandae sequi voluptatibus dignissimos, corrupti architecto cumque adipisci sit ab aut iusto temporibus in a!</p>
                <button className="hero__button button" onClick={clicked}>Start Now</button>
            </div>
            <ContactInfo list={ctcInfo} />
        </section>
    )
}

export default Hero