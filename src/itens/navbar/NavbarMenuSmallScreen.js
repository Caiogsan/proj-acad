import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

function NavbarMenuSmallScreen({ menu, setMenu }) {
  function switchMenu() {
    setMenu(!menu);
  }
  return (
    <div className="absolute top-12 text-sm">
      <ul className="flex items-end flex-col gap-2">
        <li>
          <AiFillCaretRight onClick={switchMenu}></AiFillCaretRight>
        </li>
        <li>
          <Link to={"/about"}>Compre Online</Link>
        </li>
        <li>
          <Link to={"/times"}>Horários</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contato</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarMenuSmallScreen;
