import { Link } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai";
import NavbarMenu from "../navbar/NavbarMenu";
import { useState } from "react"




function Navbar(){
    const [menu, setMenu] = useState(false)
    function changeMenu(){
        setMenu(!menu)
    }

    
    return (
        <header className="h-36 bg-transparent absolute w-full">
            <div className=" px-6 flex items-center sm:justify-between sm:px-20 w-full">
                <div className=" text-center pt-10 tracking-widest text-white font-bold">
                    <div className="flex flex-col gap-2 hover:scale-110 duration-500">
                        <Link to={"/proj-acad"}><h1 className="md:text-4xl text-2xl ">ULTIMATE</h1></Link>
                        <Link to={"/proj-acad"}><h1 className="md:text-xl text-md ">ACADEMIA</h1></Link>
                    </div>
                </div>
                <div className="hidden sm:flex">
                    <ul className="flex gap-10 md:gap-16 sm:gap-12 pt-10 gap-8 lg:gap-20 lg:pl-8 sm:gap-10 md:gap-16 text-white font-bold items-center md:pl-20 sm:pl-16 pl-4">  
                        <li className="hover:scale-110 duration-500 text-center inline-block"><Link to={'/about'}>Compre <br></br> Online</Link></li>
                        <li className="hover:scale-110 duration-500"><Link to={'/about'}>Sobre</Link></li>
                        <li className="hover:scale-110 duration-500"><Link to={'/times'}>Horários</Link></li>
                        <li className="hover:scale-110 duration-500"><Link to={'/contact'}>Contato</Link></li>
                    </ul>
                </div>
                <div className="sm:hidden flex flex-col items-end text-white text-xl w-full">
                    {menu ? <NavbarMenu setMenu={setMenu} menu={menu}></NavbarMenu> : <AiOutlineMenu className="hover:cursor-pointer mt-2" onClick={changeMenu}></AiOutlineMenu>}
                </div>
            </div>
        </header>
    )
}

export default Navbar