import AboutSlide from '../components/items/AboutSlide'
import ImageRoler from '../components/items/ImageRoler'

function About(){
    return (
        <section className="h-[955px] bg-gradient-to-t from-[#FF8E24] to-[#FFC530]">
            <AboutSlide></AboutSlide>
            <ImageRoler></ImageRoler>
        </section>
    )
}

export default About