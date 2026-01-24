import '../../assets/styles/LocalBanner.css'

function LocalBanner() {
    const data = [
        {
            name: 'Address',
            text: '916 Van Buren St NW, VA, Roanoke, EE.UU',
            href: 'https://www.google.com/maps/search/?api=1&query=37.2742,-79.9576'
        },
        {
            name: 'Days',
            text: 'Saturday - Sunday',
            href: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Evento+en+916+Van+Buren&dates=20250915T090000/20250915T110000&details=Evento+en+esta+dirección&location=916+Van+Buren+St+NW,+Roanoke,+VA,+EE.UU.'
        }
    ]

    return (
        <ul className='local-banner'>
            {data.map(item => {
                return (
                    <li className='local-banner__item' key={item.name}>
                        <a className='local-banner__link' href={item.href} target="_blank" rel="noopener noreferrer">
                            <h2 className='local-banner__title'>{item.name}</h2>
                            <p className='local-banner__text'>{item.text}</p>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default LocalBanner