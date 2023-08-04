import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home(){
    return (
        <section className="bg-gray-200 pb-4">
            <div className="bg-black">
                <section className="h-[551px] bg-fundo1 bg-no-repeat bg-fixed bg-cover flex flex-col gap-6 md:pt-12 pt-80 md:pl-12 bg-[center_top_70px]">
                    <h1 className="text-white lg:w-96 md:w-64 w-full text-center md:text-start md:text-2xl lg:text-3xl font-bold lg:pt-4 md:flex">VOCÊ SEMPRE EM DIA COM A SAÚDE!!</h1>
                    <Link className='flex justify-center md:justify-start' to={'/about'}><button className="font-bold h-10 border-2 hover:scale-110 border-transparent hover:border-white duration-500 text-sm text-white bg-gradient-to-b from-[#FFC530] to-[#E8C420] w-52 rounded">SAIBA MAIS!</button></Link>
                </section>
            </div>
            <div className="h-[620px] w-[90%] rounded flex flex-col sm:flex-row m-auto bg-gray-300 my-12">
                <div className="sm:w-[50%] h-[50%] sm:h-full bg-center sm:bg-left bg-fundo2 rounded bg-cover">
        
                </div>
                <div className="sm:w-[50%] h-[50%] sm:h-[620px] border-2 border-black rounded border-t-0 sm:border-t-2 sm:border-l-0">
                    <div className="w-[80%] m-auto justify-between tracking-widest flex flex-col md:py-24 lg:py-28 sm:py-24 py-8 h-full">
                        <h1 className=" font-bold md:leading-[60px] lg:leading-[60px] sm:leading-[50px] leading-[55px] lg:text-2xl text-center md:text-xl sm:text-lg text-sm">EQUIPAMENTOS DE ULTIMA GERAÇÃO</h1>
                        <p className=" md:leading-[50px] lg:leading-[50px]  leading-[45px] lg:text-xl sm:text-md text-xs text-center">As áreas de musculação e atividades extras são equipadas com o que há de mais morderno no mercado fitness. Venha conferir!</p>
                    </div>
                </div>
            </div>
            <div className="flex w-[90%] h-[720px] m-auto">
                <div className="bg-gray-300 rounded border-2 border-black border-r-0 w-[50%]">
                    
                    <form className='m-auto flex flex-col justify-between h-full py-12 w-[80%]'>
                        <h1 className='text-center font-principal text-2xl'>Envie uma mensagem!</h1>
                        <input className='text-sm rounded p-2' type="text" placeholder="Nome"></input>
                        <input className='text-sm rounded p-2' type="email" placeholder="Email"></input>
                        <input className='text-sm rounded p-2' type="text" placeholder="Resumo"></input>
                        <textarea placeholder="Mensagem" className="resize-none h-24 rounded p-2"></textarea>
                        <button type="submit" className='text-sm rounded hover:bg-yellow-400 duration-500 p-2 bg-white text-black'>Enviar!</button>
                        <div className='flex justify-center items-center gap-12'>
                            <a href="/" className='text-3xl hover:text-blue-800 duration-500'><FaFacebook></FaFacebook></a>
                            <a href="/" className='text-3xl hover:text-rose-600 duration-500'><FaInstagram></FaInstagram></a>
                            <a href="/" className='text-3xl hover:text-[#25D366] duration-500'><FaWhatsapp></FaWhatsapp></a>
                        </div>
                    </form>
                    
                </div>
                <div className="w-[50%] rounded bg-fundo3 bg-no-repeat bg-cover bg-center">

                </div>
            </div>
        </section>
    )
}

export default Home