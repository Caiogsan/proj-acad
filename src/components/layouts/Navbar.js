// USED REACT-SPRING FOR ANIMATION
import { AiOutlineMenu } from "react-icons/ai";
import NavbarMenu from "../items/navbarItens/NavbarItensSmallScreen";
import UserInfo from "./login_register/UserInfo";
import { StoreCardContext } from "../items/storeItems/StoreCardContext";
import { useContext } from "react";
import { animated } from "react-spring";
import NavbarItensSmallScreen from "../items/navbarItens/NavbarItens";
import NavbarLogo from "../items/navbarItens/NavbarLogo";

function Navbar() {
  const { openPage, menu, setMenu, transition, changeMenu } =
    useContext(StoreCardContext);
  return (
    <header className=" bg-transparent absolute w-full">
      <div className={`absolute right-0`}>
        {transition((style, item) =>
          item === true ? (
            <animated.div style={style}>
              <UserInfo></UserInfo>
            </animated.div>
          ) : (
            <div></div>
          )
        )}
      </div>
      <div
        className={`h-36 px-6 flex items-center sm:justify-between sm:px-20 w-full`}
      >
        <NavbarLogo></NavbarLogo>
        <NavbarItensSmallScreen handleClick={openPage}></NavbarItensSmallScreen>
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
