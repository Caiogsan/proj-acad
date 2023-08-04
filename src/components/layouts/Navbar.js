import { Link } from "react-router-dom"
import scorpion from "../../img/scorpion.png"

function Navbar(){
    return (
        <header className="flex h-36 bg-gradient-to-b from-[#FF8E24] to-[#FFC530]">
            <div className="sm:w-[30%] font-principal gap-4 tracking-widest text-white font-bold m-auto flex text-center">
                <div className="flex flex-col gap-4 hover:scale-110 duration-500 pl-4 sm:pl-8 md:pl-12">
                    <Link to={"/"}><h1 className="md:text-3xl text-2xl ">SCORPION</h1></Link>
                    <Link to={"/"}><h1 className="md:text-xl text-md ">ACADEMIA</h1></Link>
                </div>
            </div>
            <div className="w-[70%] flex">
                <ul className="flex gap-10 md:gap-16 sm:gap-12 gap-8 lg:gap-20 lg:pl-8 sm:gap-10 md:gap-16 text-white font-bold items-center md:pl-20 sm:pl-16 pl-4">  
                    <li className="hover:scale-110 duration-500 text-center inline-block"><Link to={'/about'}>Compre <br></br> Online</Link></li>
                    <li className="hover:scale-110 duration-500"><Link to={'/about'}>Sobre</Link></li>
                    <li className="hover:scale-110 duration-500"><Link to={'/times'}>Horários</Link></li>
                    <li className="hover:scale-110 duration-500"><Link to={'/contact'}>Contato</Link></li>
                </ul>
            </div>
            <div className="lg:w-[25%] sm:w-[0px] flex justify-end items-center hidden lg:flex">
                <img src={scorpion} alt="scorpion" className="h-28 pr-14"></img>
            </div>
        </header>
    )
}

export default Navbar