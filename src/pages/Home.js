import { Link } from 'react-router-dom'
import ContactSlide from '../components/items/ContactSlide'
import NormalSlide from '../components/items/NormalSlide'

function Home(){
    return (
        <section className="bg-gray-200 pb-4">
            <div className="bg-black">
                <section className="h-[551px] bg-fundo1 bg-no-repeat bg-fixed bg-cover flex flex-col gap-6 md:pt-12 pt-96 md:pl-12 bg-[center_top_70px]">
                    <h1 className="text-white lg:w-96 md:w-64 w-full text-center md:text-start md:text-2xl lg:text-3xl font-bold lg:pt-4 md:flex">VOCÊ SEMPRE EM DIA COM A SAÚDE!!</h1>
                    <Link className='flex md:w-52 justify-center md:justify-start' to={'/about'}><button className="font-bold h-10 border-2 hover:scale-110 border-transparent hover:border-white duration-500 text-sm text-white bg-gradient-to-b from-[#FFC530] to-[#E8C420] w-52 rounded">SAIBA MAIS!</button></Link>
                </section>
            </div>
            <NormalSlide></NormalSlide>
            <ContactSlide></ContactSlide>
        </section>
    )
}

export default Home