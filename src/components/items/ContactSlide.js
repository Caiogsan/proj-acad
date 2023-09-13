import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'

function ContactSlide(){
    return (
        <div className="flex w-[90%] h-[720px] m-auto">
            <div className="bg-gray-300 rounded border-2 border-black border-r-0 w-[50%]">   
                <form className='m-auto flex flex-col justify-between h-full py-12 w-[80%]'>
                    <h1 className='text-center font-principal text-2xl'>Envie uma mensagem!</h1>
                    <input className='text-sm rounded p-2' type="text" placeholder="Nome"></input>
                    <input className='text-sm rounded p-2' type="email" placeholder="Email"></input>
                    <input className='text-sm rounded p-2' type="text" placeholder="Assunto"></input>
                    <textarea placeholder="Mensagem" className="resize-none h-24 rounded p-2"></textarea>
                    <button type="submit" className='text-sm rounded hover:bg-yellow-400 duration-500 p-2 bg-white text-black'>Enviar!</button>
                    <div className='flex justify-center items-center gap-12'>
                        <a href="/" className='text-3xl hover:text-blue-800 duration-500'><FaFacebook></FaFacebook></a>
                        <a href="/" className='text-3xl hover:text-rose-600 duration-500'><FaInstagram></FaInstagram></a>
                        <a href="/" className='text-3xl hover:text-[#25D366] duration-500'><FaWhatsapp></FaWhatsapp></a>
                    </div>
                </form> 
            </div>
            <div className="w-[50%] rounded bg-fundo3 bg-no-repeat bg-cover bg-center"></div>
        </div>
    )
}

export default ContactSlide