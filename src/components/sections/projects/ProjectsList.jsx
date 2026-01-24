import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import '../../../assets/styles/Projects.css'
import Project from './Project'
import data from '../../../data/projects'

function ProjectsList() {
    useEffect(() => {
        if (!CSS.supports('animation-timeline', 'view(inline)')) {
            const slides = document.querySelectorAll('.project');
            slides.forEach(sl => sl.classList.remove('slide-animate'));
        }
    })
    
    const {ref, inView} = useInView({threshold: 0.1, triggerOnce: true})

    return (
        <ul ref={ref} className={`projects-list ${inView? 'animate' : ''}`}>
            {data.map(item => (
                <Project {...item} key={item.title} />
            ))}
        </ul>
    )
}

export default ProjectsList