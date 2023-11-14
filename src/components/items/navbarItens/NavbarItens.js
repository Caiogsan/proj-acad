import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import userImage from "../../../img/login/user1.png";
import { StoreCardContext } from "../storeItems/StoreCardContext";
import { useContext, useRef } from "react";
import NavbarMenuLoggedIn from "./NavbarMenuLoggedIn";
import { animated } from "react-spring";

function NavbarItens({ handleClick }) {
  const isAnimatingRef = useRef(false);

  const {
    isLogged,
    transition2,
    menuLogged,
    changeMenuLogged,
    changeTransition2,
    changeTransition,
    openPage,
  } = useContext(StoreCardContext);

  return (
    <div className="hidden sm:flex">
      <ul className="flex gap-10  md:gap-16 sm:gap-12 gap-8 lg:gap-20 lg:pl-8 sm:gap-10 md:gap-16 text-white font-bold items-center md:pl-20 sm:pl-16 pl-4">
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
          {isLogged ? (
            <img
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
              className="h-8 w-8"
              alt="user"
              src={userImage}
            ></img>
          ) : (
            <AiOutlineUser
              onClick={() => {
                openPage();
                changeTransition();
              }}
              className="text-2xl hover:cursor-pointer"
            ></AiOutlineUser>
          )}
        </li>
      </ul>
      {menuLogged
        ? transition2((style, item) =>
            item ? (
              <animated.div style={style}>
                <NavbarMenuLoggedIn></NavbarMenuLoggedIn>
              </animated.div>
            ) : null
          )
        : null}
    </div>
  );
}

export default NavbarItens;
