import ImageRoler from "./ImageRoler"

function AboutSlide(){
    return (
        <div className="">
            <div className="m-auto flex justify-center items-start h-full lg:h-[600px]">
                <div className="lg:h-[600px] md:h-[500px] sm:h-[850px] h-[890px] sm:py-4 md:py-12 border-black border-2 w-[80%] rounded bg-gradient-to-b from-gray-200 flex flex-col justify-between">
                    <div className="md:flex  h-[18rem] w-[90%] m-auto">
                        <iframe title="maps" className="h-72 w-[90%] m-auto md:m-0 md:w-[55%] rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10414.710108372681!2d-42.230621714481586!3d-22.647968913492743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97051c3ed0c85f%3A0xab7509b2d17c8e0!2sBaixo%20Grande%2C%20S%C3%A3o%20Pedro%20da%20Aldeia%20-%20RJ%2C%2028940-000!5e0!3m2!1spt-BR!2sbr!4v1696533122838!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
                        <div className="md:w-[50%] w-[90%] py-10 h-72 md:pl-12 m-auto flex flex-col md:justify-between">
                            <h1 className="font-bold pb-4 sm:pb-2 md:pb-0 text-sm sm:text-md tracking-widest leading-8 ">VENHA CONHECER O NOSSO CENTRO DE TREINAMENTO!</h1>
                            <div>
                                <p className="pb-6 sm:pb-4 font-bold tracking-widest text-sm sm:text-md">Localizado em:</p>
                                <p className="tracking-widest font-bold text-[12px] sm:text-sm">Lorem ipsum, dolor sit amet - consectetur adipiscing elit. 14</p>
                            </div>
                        </div>
                    </div>
                    <h1 className="leading-10 h-[30%] w-[80%] lg:text-lg md:w-[90%] flex items-end just m-auto text-center text-[10px] sm:text-xs md:text-sm tracking-widest font-bold">GARANTIMOS EQUIPAMENTOS DE ALTA QUALIDADE E UM ÓTIMO ATENDIMENTO AO CLIENTE! VENHA FAZER PARTE VOCÊ TAMBÊM!!</h1>
                </div>   
            </div>
            <ImageRoler></ImageRoler>
        </div>
    )
}

export default AboutSlide