import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";


function NavbarItens({ handleClick }) {
  return (
    <div className="hidden sm:flex">
      <ul className="flex gap-10 md:gap-16 sm:gap-12 gap-8 lg:gap-20 lg:pl-8 sm:gap-10 md:gap-16 text-white font-bold items-center md:pl-20 sm:pl-16 pl-4">
        <li className="hover:scale-105 duration-300 text-center inline-block">
          <Link to={"/store"}>Loja</Link>
        </li>
        <li className="hover:scale-105 duration-300">
          <Link to={"/times"}>Horários</Link>
        </li>
        <li className="hover:scale-105 duration-300">
          <Link to={"/contact"}>Contato</Link>
        </li>
        <li className="hover:scale-105 duration-300">
          <AiOutlineUser
            onClick={handleClick}
            className="text-2xl hover:cursor-pointer"
          ></AiOutlineUser>
        </li>
      </ul>
    </div>
  );
}

export default NavbarItens;
