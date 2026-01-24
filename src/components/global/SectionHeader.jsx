import { useInView } from "react-intersection-observer"

function SectionHeader({ title, desc }) {
    const {ref, inView} = useInView({threshold: 0.1, triggerOnce: true})

    return (
        <header ref={ref} className={`section-header ${inView? 'animate' : ''}`} >
            <h2 className="section-header__title">{title}</h2>
            <p className="section-header__desc">{desc}</p>
        </header>
    )
}

export default SectionHeader