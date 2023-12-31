// USED REACT-SPRING FOR ANIMATION

import { AiOutlineMenu } from "react-icons/ai";
import NavbarMenuSmallScreen from "../itens/navbar/NavbarMenuSmallScreen";
import UserInfo from "./login_register/UserInfo";
import { StoreCardContext } from "../data/StoreCardContext";
import { useContext } from "react";
import { animated } from "react-spring";
import NavbarItens from "../itens/navbar/NavbarItens";
import NavbarLogo from "../itens/navbar/NavbarLogo";

function Navbar() {
  const {
    openPage,
    menu,
    setMenu,
    transition,
    changeMenu,
    changeTransition,
  } = useContext(StoreCardContext);
  return (
    <header className=" bg-transparent max-w-100vw absolute w-full">
      <div className={`absolute fixed right-0`}>
        {transition((style, item) =>
          item === true ? (
            <animated.div style={style}>
              <UserInfo></UserInfo>
            </animated.div>
          ) : (
            <div className="hidden"></div>
          )
        )}
      </div>
      <div
        className={`h-36 px-6 flex items-center sm:justify-between sm:px-20 w-full`}
      >
        <NavbarLogo></NavbarLogo>
        <NavbarItens
          handleClick={() => {
            
            changeTransition();
          }}
        ></NavbarItens>
        <div className="sm:hidden flex flex-col items-end text-white text-xl w-full">
          {menu ? (
            <NavbarMenuSmallScreen
              setMenu={setMenu}
              menu={menu}
            ></NavbarMenuSmallScreen>
          ) : (
            <AiOutlineMenu
              className="hover:cursor-pointer mt-2"
              onClick={() => {
                changeMenu();
              }}
            ></AiOutlineMenu>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
