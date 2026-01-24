import { useState } from "react"

function Project({ title, info, img }) {
    const [isHover, setIsHover] = useState(false)

    const style = {
        backgroundImage: `linear-gradient(to bottom, #0004 30%, #14243A), url(${new URL(`../../../assets/imgs/${img}`, import.meta.url).href})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    const hoverStyle = {
        backgroundImage: `linear-gradient(to bottom, #0002 70%, #14243A), url(${new URL(`../../../assets/imgs/${img}`, import.meta.url).href})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    return (
        <li className="project slide-animate" style={isHover? hoverStyle : style} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <h3 className="project__title">{title}</h3>
            <ul className="project-list">
                {info.map((char, index) => <li className="project-list__item" key={index} >{char}</li>)}
            </ul>
        </li>
    )
}

export default Project