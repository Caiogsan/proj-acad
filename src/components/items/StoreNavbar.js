import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function StoreNavbar() {
  return (
    <div>
      <div className={`h-14 flex bg-neutral-700 items-center px-10`}>
        <div className="w-[50%] flex items-center">
          <div className="flex rounded items-center mr-10 px-2 bg-white h-8 w-64 justify-between">
            <div className="flex items-center gap-2">
              <AiOutlineMenu></AiOutlineMenu>
              <p className="font-semibold text-sm">CATEGORIAS</p>
            </div>
            <IoIosArrowDown></IoIosArrowDown>
          </div>
          <div>
            <ul className="flex text-white gap-4 font-bold text-xs">
              <li className="bg-neutral-950 hover:cursor-pointer p-2 rounded">
                INÍCIO
              </li>
              <li className="hover:bg-neutral-950 hover:cursor-pointer duration-300 p-2 rounded">
                TODOS OS PRODUTOS
              </li>
              <li className="hover:bg-neutral-950 hover:cursor-pointer duration-300 p-2 rounded">
                COMBOS
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[50%] gap-6 flex justify-end">
          <input
            type="text"
            className="pl-2 p-1 rounded w-80 placeholder:text-sm"
            placeholder="O que você está buscando hoje?"
          ></input>
          <button
            type="submit"
            className="text-xs px-4 rounded bg-black text-white"
          >
            PESQUISAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoreNavbar;
