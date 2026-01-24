function FooterNav({ data }) {
    return (
        <nav className="nav">
            <ul className="nav-list">
            {data.map(item => {
                return (
                    <li className="nav-list__item" key={item.text}>
                        <a href={item.href} className={`nav-list__link`} rel="noopener noreferrer" target='__blank'>{item.text}</a>
                    </li>
                )
            })}
            </ul>
        </nav>
    )
}

export default FooterNav