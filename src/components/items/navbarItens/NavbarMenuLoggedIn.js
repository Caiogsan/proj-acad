import { AiFillCloseCircle } from "react-icons/ai";
import { useContext, useRef } from "react";
import { StoreCardContext } from "../storeItems/StoreCardContext";
const NavbarMenuLoggedIn = () => {
    const { changeMenuLogged, changeTransition2, isLogged } = useContext(StoreCardContext)
    const isAnimatingRef = useRef(false);

    return (
        <div className="absolute top-0 right-0">
      <div className="bg-white z-10 gap-2  flex flex-col items-center px-5 py-7 h-screen absolute top-0 right-0 w-[400px]">
        
        <h1 className="font-most text-gray-600">tera</h1>
        <div className="flex mt-8 font-most text-sm w-full">
          <div>
            
          </div>
        </div>
       
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
     
    )
}

export default NavbarMenuLoggedIn