import '../../../assets/styles/Steps.css'
import Step from './Step'
import data from '../../../data/steps'

function StepsList() {
    return (
        <ol className="steps-list">
            {data.map(item => <Step {...item} key={item.id} />)}
        </ol>
    )
}

export default StepsList