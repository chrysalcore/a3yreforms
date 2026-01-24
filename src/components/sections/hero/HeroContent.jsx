import CTA from "../../others/CTA"
import Title from "../../others/Title"

function HeroContent({ onClick }) {
    return (
        <div className='hero-content'>
            <Title />
            <p className='hero__text'>Proudly serving Roanoke and the Blue Ridge with reliable construction and remodeling services that turn your house into the home you love.</p>
            <CTA onClick={onClick} >Start Now</CTA>
        </div>
    )
}

export default HeroContent