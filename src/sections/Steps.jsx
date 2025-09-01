import '../assets/styles/Steps.css'

function Steps() {
    const items = [
        {
            src: 'meeting.svg',
            title: 'Initial Consultation',
            desc: 'Explore ideas and define your goals.'
        },
        {
            src: 'design.svg',
            title: 'Design & Budget',
            desc: '3D visualizations, transparent pricing.'
        },
        {
            src: 'approval.svg',
            title: 'Approval',
            desc: 'Fine-tune all details collaboratively.'
        },
        {
            src: 'execution.svg',
            title: 'Execution',
            desc: 'Professional crews with weekly updates.'
        },
        {
            src: 'finished.svg',
            title: 'Final Walkthrough',
            desc: 'We only exit when you love every corner.'
        }
    ]

    return (
        <section className="steps section" id="steps">
            <header className="section-header">
                <h2 className="section-header__title">Seamless Journey</h2>
                <p className="section-header__desc">Your stress-free renovation roadmap from concept to keys</p>
            </header>
            <ol className="steps-list">
                {items.map((item, index) => {
                    return (
                        <li className="steps-list__item">
                            <img loading="lazy" src={new URL(`../assets/icons/${item.src}`, import.meta.url).href} alt={`${item.title} image`} className="steps-list__img" />
                            <div className="steps-list__text">
                                <h3 className="steps-list__title">{`${index+1}. ${item.title}`}</h3>
                                <p className="steps-list__desc">{item.desc}</p>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </section>
    )
}

export default Steps