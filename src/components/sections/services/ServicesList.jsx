import '../../../assets/styles/Services.css'
import Service from './Service'
import data from '../../../data/services'

function ServicesList() {
    return (
        <ul className="services-list">
            {data.map(item => <Service {...item} key={item.name} />)}
        </ul>
    )
}



export default ServicesList