import { MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {imgData} from "../data/imgData"

function About(){
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 300
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 300
    }
    return (
        <section className="h-[955px] bg-gradient-to-t from-[#FF8E24] to-[#FFC530]">
            <div className="m-auto flex w-[95%] justify-center items-start h-[600px]">
                <div className="h-[600px] border-black border-2 w-[80%] rounded bg-gradient-to-b from-gray-200 flex flex-col justify-between">
                    <div className="md:flex h-[80%] w-[90%] pt-12 m-auto">
                        <iframe title="maps" className="h-72 w-[80%] m-auto md:m-0 md:w-[500px] w-[50%] rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29504.680476732705!2d-45.48673448916013!3d-22.425824100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb7cad272ac347%3A0x585554a58b724607!2sSCORPION%20ACADEMI!5e0!3m2!1sen!2sbr!4v1686154694795!5m2!1sen!2sbr"></iframe>
                        <div className="md:w-[50%] h-56 pl-12 py-2 flex flex-col md:justify-between">
                            <h1 className="font-bold tracking-widest leading-8 ">VENHA CONHECER O NOSSO CENTRO DE TREINAMENTO!</h1>
                            <div>
                                <p className="pb-2 font-bold tracking-widest">Localizado em:</p>
                                <p className="tracking-widest font-bold text-sm">Av. João Antônio Pereira, 118 - Varginha, Itajubá - MG, 37501-060</p>
                            </div>
                        </div>
                    </div>
                    <h1 className="pb-12 leading-10 h-[30%] lg:text-lg md:w-[90%] m-auto text-center text-xs md:text-sm tracking-widest font-bold">GARANTIMOS EQUIPAMENTOS DE ALTA QUALIDADE E UM ÓTIMO ATENDIMENTO AO CLIENTE! VENHA FAZER PARTE VOCÊ TAMBÊM!!</h1>
                </div>
                
            </div>
            <div className="pt-6 flex px-6 md:px-16 w-[100%]">
                    <div onClick={slideLeft} className="h-[245px] mt-8 md:pr-10 flex items-center"><MdChevronLeft className="cursor-pointer opacity-50 hover:opacity-100 duration-500" size={40}></MdChevronLeft></div>                 
                    <div id="slider" className={`scrollbar-hide m-auto gap-x-16 pt-8 h-[350px]  flex scroll scroll-smooth overflow-x-scroll`}>
                        {imgData.map((item)=> (
                            <img className="h-60 hover:scale-110 ease-in-out duration-500 cursor-pointer w-96" src={item.img} alt="/"></img>
                        ))}
                        
                    </div>
                    <div onClick={slideRight} className="h-[245px] mt-8 md:pl-10 flex items-center"><MdChevronRight className="cursor-pointer opacity-50 hover:opacity-100 duration-500" size={40}></MdChevronRight></div> 
                </div>
            
        </section>
    )
}

export default About