import { AiFillCloseCircle, AiOutlineUser } from "react-icons/ai";
import { useContext, useRef } from "react";
import { StoreCardContext } from "../../data/StoreCardContext";
import { Link } from "react-router-dom";

const NavbarMenuLoggedIn = () => {
  const { changeMenuLogged, changeTransition2, isLogged } =
    useContext(StoreCardContext);
  const isAnimatingRef = useRef(false);

  return (
    <div className=" fixed top-0 right-0">
      <div className="bg-white z-10 gap-2 fixed flex flex-col items-center px-5 py-7 h-screen absolute top-0 right-0 w-[400px]">
        <AiOutlineUser className="text-3xl"></AiOutlineUser>
        <h1 className="font-most text-gray-600">MINHA CONTA</h1>
        <ul className="flex flex-col flex-wrap justify-start gap-4 px-4 pt-8 text-sm w-full">
          <li><Link>PAINEL</Link></li>
          <li><Link>PEDIDOS</Link></li>
          <li><Link>DOWNLOADS</Link></li>
          <li><Link>DETALHES DA CONTA</Link></li>
          <li><Link>CARTEIRA</Link></li>
          <li><Link>CONTATO</Link></li>
          <li><Link>SAIR</Link></li>
        </ul>
      </div>
      <AiFillCloseCircle
        onClick={() => {
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;

            if (isLogged) {
              changeMenuLogged();
              changeTransition2();
            } else {
              changeMenuLogged();
              changeTransition2();
            }

            // Assuming your animations take some time to complete
            setTimeout(() => {
              isAnimatingRef.current = false;
            }, 500); // Adjust the delay as needed
          }
        }}
        className="absolute right-[415px] top-6 text-5xl hover:cursor-pointer text-white"
      ></AiFillCloseCircle>
    </div>
  );
};

export default NavbarMenuLoggedIn;
