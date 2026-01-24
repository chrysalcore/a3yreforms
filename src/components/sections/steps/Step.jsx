import { useInView } from 'react-intersection-observer'

function Step({ id, title, desc, src }) {
    const {ref, inView} = useInView({threshold: 0.1, triggerOnce: true})

    return (
        <li ref={ref} className={`step ${inView? 'animate' : ''}`}>
            <img loading="lazy" src={new URL(`../../../assets/icons/${src}`, import.meta.url).href} alt={`${title} image`} className="step__img" />
            <div className="step__text">
                <h3 className="step__title">{`${id}. ${title}`}</h3>
                <p className="step__desc">{desc}</p>
            </div>
        </li>
    )
}

export default Step