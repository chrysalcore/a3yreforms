function Nav(props) {
    return (
        <nav className="nav">
            <ul className="nav-list">
            {props.list.map(item => {
                return (
                    <li className="nav-list__item" key={item.text}>
                        <a href={item.href} className={`nav-list__link${item.isSelected? ' selected' : ''}`} rel="noopener noreferrer">{item.text}</a>
                    </li>
                )
            })}
            </ul>
        </nav>
    )
}

export default Nav