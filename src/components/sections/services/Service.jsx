import { useInView } from 'react-intersection-observer'

function Service({ name, desc, src }) {
    const {ref, inView} = useInView({threshold: 0.1, triggerOnce: true})

    return (
        <li ref={ref} className={`service ${inView? 'animate' : ''}`}>
            <picture className='service-pict'>
                <img loading="lazy" src={new URL(`../../../assets/imgs/${src}`, import.meta.url).href} alt={`${name} icon`} className="service__img" />
            </picture>
            <div className="service-text" role="contentinfo">
                <h3 className="service__head">{name}</h3>
                <p className="service__desc">{desc}</p>
            </div>
        </li>
    )
}

export default Service