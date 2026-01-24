import '../../../assets/styles/Contact.css'
import SectionHeader from '../../global/SectionHeader'
import ContactList from './ContactList'
import Form from '../../others/Form'
import header from '../../../data/headers'

function Contact({ ref }) {
    return (
        <section ref={ref} className="contact section" id='contact'>
            <div className="contact-text">
                <SectionHeader {...header.contact} />
                <ContactList />
            </div>
            <Form />
        </section>
    )
}

export default Contact 