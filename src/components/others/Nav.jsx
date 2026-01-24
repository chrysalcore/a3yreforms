import data from "../../data/navigation"

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav-list">
            {data.map(item => {
                return (
                    <li className="nav-list__item" key={item.text}>
                        <a href={item.href} className={`nav-list__link${item.isSelected? ' selected' : ''}`} >{item.text}</a>
                    </li>
                )
            })}
            </ul>
        </nav>
    )
}

export default Nav