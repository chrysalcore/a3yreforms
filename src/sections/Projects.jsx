import '../assets/styles/Projects.css'

function Projects() {
    const items = [
        {
            title: 'Small Bathroom',
            chars: [
                'LEDs Integrations',
                'Full Renovation',
                'Only 15 Days'
            ]
        },
        {
            title: 'Full Kitchen',
            chars: [
                'LEDs Integrations',
                'Full Renovation',
                'Only 15 Days'
            ]
        }
    ]

    return (
        <section className="projects section" id="projects">
            <header className="section-header">
                <h2 className="section-header__title">Our Masterpieces</h2>
                <p className="section-header__desc">Where vision meets craftsmanship - explore completed transformations</p>
            </header>
            <ul className="projects-list">
                {items.map(item => {
                    return (
                        <li className="projects-list__item">
                            <h3 className="projects-list__title">{item.title}</h3>
                            <ul className="projects-list-sublist">
                                {item.chars.map(char => <li className="projects-list-sublist__item">{char}</li>)}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Projects