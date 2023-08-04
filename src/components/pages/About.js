import Card from "../items/Card"
import styles from "./About.module.css"
import foto1 from "../../img/rotativa/foto1.PNG"
import foto2 from "../../img/rotativa/foto2.PNG"
import foto3 from "../../img/rotativa/foto3.PNG"
import foto4 from "../../img/rotativa/foto6.PNG"
import foto5 from "../../img/rotativa/imagem5.PNG"
import seta1 from "../../img/back.png"
import seta2 from "../../img/next.png"

function About(){
    
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
            <div className="pt-6 flex w-[100%]">
                    <div className="w-[11%] h-[245px] mt-8 flex items-center pl-10"><img className="h-12 w-12 sm:w-[50px]" alt="seta esquerda" src={seta1}></img></div>                 
                    <div className={`w-[78%] m-auto  pl-8 gap-x-8 pt-8 h-[350px] ${styles.scroll} flex overflow-x-scroll`}>
                        <div className={`${styles.teste}`}>
                            <Card image={foto1}></Card>
                            <Card image={foto5}></Card>
                            <Card image={foto3}></Card>
                                         
                        </div>
                        <div className={`${styles.teste}`}>
                            <Card image={foto4}></Card>
                            <Card image={foto2}></Card>
                            <Card image={foto1}></Card>
                                                     
                        </div>
                        
                    </div>
                    <div className="w-[11%] h-[245px] mt-8 flex items-center justify-end pr-10"><img className="h-12 w-12 sm:w-[50px]" alt="seta esquerda" src={seta2}></img></div> 
                </div>
            
        </section>
    )
}

export default About