import { useState } from "react";
import { AiOutlineUser, AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { StoreCardContext } from "./storeItems/StoreCardContext";


function UserInfo(){
    const { openPage } = useContext(StoreCardContext)
    const [loginRegister, setLoginRegister] = useState(true) 
    return (
        <div>
            <div className="bg-white z-10 gap-2  flex flex-col items-center px-5 py-7 h-screen absolute right-0 w-[400px]">
            <AiOutlineUser className="text-3xl text-gray-600"></AiOutlineUser>
            <h1 className="font-most text-gray-600">MINHA CONTA</h1>
            <div className="flex mt-8 font-most text-sm w-full">
                <div onClick={() => setLoginRegister(true)} className={`w-[50%] hover:cursor-pointer text-center  pb-3 border-black ${loginRegister ? 'border-b-2 text-gray-600' : 'border-b-[1px] text-gray-400'}`}><h2>LOGIN</h2></div>
                <div onClick={() => setLoginRegister(false)} className={`w-[50%] hover:cursor-pointer text-center  pb-3 border-black ${loginRegister ? 'border-b-[1px] text-gray-400' : 'border-b-2 text-gray-600'}`}><h2>CADASTRAR</h2></div>
            </div>
            
        </div>
        <AiFillCloseCircle onClick={() => {openPage()}} className="absolute right-[415px] top-6 text-5xl hover:cursor-pointer text-white"></AiFillCloseCircle>
        </div>
    )
}

export default UserInfo