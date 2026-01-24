import '../../../assets/styles/Hero.css'

function Hero({ children }) {
    return (
        <section className="hero section" id="hero">
            { children }
        </section>
    )
}

export default Hero