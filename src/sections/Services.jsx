import '../assets/styles/Services.css'

function Services() {
    const items = [
        {
            src: 'remodelation.svg',
            name: 'Remodelation',
            desc: 'Transform outdated spaces into modern, functional homes.'
        },
        {
            src: 'plumbing.svg',
            name: 'Plumbing',
            desc: 'Water systems perfected: installations, repairs, upgrades.'
        },
        {
            src: 'electricity.svg',
            name: 'Electricity',
            desc: 'Power solutions: lighting design and smart home integrations.'
        },
        {
            src: 'carpentry.svg',
            name: 'Carpentry',
            desc: 'Built-to-last woodwork: cabinets, shelves and trim.'
        },
        {
            src: 'maintenance.svg',
            name: 'Maintenance',
            desc: 'Preventative home care: minor fixes to avoid major repairs.'
        },
        {
            src: 'repair.svg',
            name: 'Emergency Repair',
            desc: 'Swift solutions for urgent issues.'
        }
    ]

    return (
        <section className="services section" id="services">
            <header className="section-header">
                <h2 className="section-header__title">Transformative Solutions</h2>
                <p className="section-header__desc">Expert renovations tailored to your lifestyle</p>
            </header>
            <ul className="services-list">
                {items.map(item => {
                    return (
                        <li className="services-list__item">
                            <picture className='services-list__pict'>
                                <img loading="lazy" src={new URL(`../assets/icons/${item.src}`, import.meta.url).href} alt={`${item.name} icon`} className="services-list__img" />
                            </picture>
                            <div className="services-list__text" role="contentinfo">
                                <h3 className="services-list__head">{item.name}</h3>
                                <p className="services-list__desc">{item.desc}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Services