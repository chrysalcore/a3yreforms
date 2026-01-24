import SectionHeader from './SectionHeader';
import sections from '../../data/headers'

function Section({ children, type }) {
    return (
        <section className={`${type} section`} id={type} >
            <SectionHeader {...sections[type]} />
            {children}
        </section>
    )
}

export default Section;