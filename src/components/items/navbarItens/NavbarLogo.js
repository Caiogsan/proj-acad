import { Link } from "react-router-dom";

function NavbarLogo() {
  return (
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
  );
}

export default NavbarLogo;
