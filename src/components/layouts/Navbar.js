// USED REACT-SPRING FOR ANIMATION

import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import NavbarMenu from "../navbar/NavbarMenu";
import { useState } from "react";

import UserInfo from "../items/UserInfo";
import { StoreCardContext } from "../items/storeItems/StoreCardContext";
import { useContext } from "react";
import { useTransition, animated } from "react-spring";

function Navbar() {
  
  const {openLogin, openPage} = useContext(StoreCardContext)
  const [menu, setMenu] = useState(false);
  const changeMenu = () => setMenu(!menu);
  const transition = useTransition(openLogin, {
    from: {x: 300, y: 0, opacity: 0},
    enter: {x: 0, y: 0, opacity: 1},
    leave: {x: 300, y: 0, opacity: 0}
  })

  return (
    <header className=" bg-transparent absolute w-full">
      <div className={`absolute right-0`}>
        {transition((style, item) => item === true ? <animated.div style={style}><UserInfo></UserInfo></animated.div> : <div></div>)}
      </div>
      <div className={`h-36 px-6 flex items-center sm:justify-between sm:px-20 w-full`}>
        <div className=" text-center  tracking-widest text-white font-bold">
          <div className="flex flex-col gap-2 hover:scale-105 duration-300">
            <Link to={"/proj-acad"}>
              <h1 className="md:text-4xl text-2xl ">ULTIMATE</h1>
            </Link>
            <Link to={"/proj-acad"}>
              <h1 className="md:text-xl text-md ">ACADEMIA</h1>
            </Link>
          </div>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex gap-10 md:gap-16 sm:gap-12 gap-8 lg:gap-20 lg:pl-8 sm:gap-10 md:gap-16 text-white font-bold items-center md:pl-20 sm:pl-16 pl-4">
            <li className="hover:scale-105 duration-300 text-center inline-block">
              <Link to={"/store"}>Loja</Link>
            </li>
            <li className="hover:scale-105 duration-300">
              <Link to={"/about"}>Sobre</Link>
            </li>
            <li className="hover:scale-105 duration-300">
              <Link to={"/times"}>Horários</Link>
            </li>
            <li className="hover:scale-105 duration-300">
              <Link to={"/contact"}>Contato</Link>
            </li>
            <li className="hover:scale-105 duration-300">
              <AiOutlineUser onClick={() => {openPage()}} className="text-2xl hover:cursor-pointer"></AiOutlineUser>
            </li>
          </ul>
        </div>
        <div className="sm:hidden flex flex-col items-end text-white text-xl w-full">
          {menu ? (
            <NavbarMenu setMenu={setMenu} menu={menu}></NavbarMenu>
          ) : (
            <AiOutlineMenu
              className="hover:cursor-pointer mt-2"
              onClick={changeMenu}
            ></AiOutlineMenu>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
