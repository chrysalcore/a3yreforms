import { useState } from "react"
import { useInView } from "react-intersection-observer"

function Form() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')

    const {ref, inView} = useInView({threshold: 0.1, triggerOnce: true})

    const data = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'John Doe',
            isInput: true,
            value: name,
            setValue: setName
        },
        {
            name: 'number',
            type: 'tel',
            placeholder: '+1 ...',
            isInput: true,
            value: number,
            setValue: setNumber
        },
        {
            name: 'subject',
            type: 'text',
            placeholder: 'Repair',
            isInput: true,
            value: subject,
            setValue: setSubject
        },
        {
            name: 'description',
            type: '',
            placeholder: 'I want to ...',
            isInput: false,
            value: description,
            setValue: setDescription
        }
    ]

    const onSubmit = (e) => {
        e.preventDefault();

        const body = 'Name: ' + name + '\n\nNumber: ' + number + '\n\n' + 'Message:\n' + description;
        const headCod = encodeURIComponent(subject);
        const bodyCod = encodeURIComponent(body);

        window.open(`mailto:contact@a3yreforms.com?subject=${headCod}&body=${bodyCod}`);
    }

    return (
        <form ref={ref} className={`form ${inView? 'animate' : ''}`} action="">
            {data.map(item => <Input {...item} key={item.name} />)}
            <button className="form__btn button" onClick={onSubmit}>Submit</button>
        </form>
    )
}

function Input({ name, type, placeholder, value, setValue, isInput }) {
    return (
        <label className="form-field" htmlFor={name}>
            <span className="form-field__text">{name}</span>
            {isInput? 
                <input className="form-field__input" type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} required /> :
                <textarea className="form-field__input" name={name} id={name} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} rows='6' required>{value}</textarea>
            }
        </label>
    )
}

export default Form