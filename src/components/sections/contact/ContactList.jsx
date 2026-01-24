import ContactItem from "./ContactItem"
import data from '../../../data/contact'

function ContactList() {
    return (
        <ul className="contact-list">
            {data.slice(0, 4).map(item => <ContactItem item={item} key={item.name} />)}
        </ul>
    )
}

export default ContactList