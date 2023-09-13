import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'

function NormalSlide(){
    return (
        <div className="h-[620px] w-[90%] rounded flex flex-col sm:flex-row m-auto bg-gray-300 my-12">
            <div className="sm:w-[50%] h-[50%] sm:h-full bg-center sm:bg-left bg-fundo2 rounded bg-cover"></div>
            <div className="sm:w-[50%] h-[50%] sm:h-[620px] border-2 border-black rounded border-t-0 sm:border-t-2 sm:border-l-0">
                <div className="w-[80%] m-auto justify-between tracking-widest flex flex-col md:py-24 lg:py-28 sm:py-24 py-8 h-full">
                    <h1 className=" font-bold md:leading-[60px] lg:leading-[60px] sm:leading-[50px] leading-[55px] lg:text-2xl text-center md:text-xl sm:text-lg text-sm">EQUIPAMENTOS DE ULTIMA GERAÇÃO</h1>
                    <p className=" md:leading-[50px] lg:leading-[50px]  leading-[45px] lg:text-xl sm:text-md text-xs text-center">As áreas de musculação e atividades extras são equipadas com o que há de mais morderno no mercado fitness. Venha conferir!</p>
                </div>
            </div>
        </div>
    )
}

export default NormalSlide