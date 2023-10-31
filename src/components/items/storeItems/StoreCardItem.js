
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

function StoreCardItem({ image, title, description, rate, cost }) {
  return (
    <div className="hover:scale-105 p-5 rounded-md duration-300 hover:shadow-[0_0_7px_1px_rgba(0,0,0,0.3)]">
      <img src={image} className="hover:cursor-pointer" alt="item-img"></img>
      <h1 className="font-info hover:cursor-pointer mt-4 text-xl h-20  font-semibold">{title}</h1>
      <div></div>
      <p className="font-bold mt-12 text-xl">R${cost}</p>
      <p className="mt-4">{description}</p>
      <div className="flex w-full mt-4 items-center justify-between">
        <button className="flex  font-semibold items-center gap-2 bg-black text-white rounded-full px-16 py-[6px]">
          <AiOutlineShoppingCart className="text-lg"></AiOutlineShoppingCart>
          <p className="text-md font-info">COMPRAR</p>
        </button>
        <AiOutlineHeart className="text-xl text-gray-500 hover:cursor-pointer hover:text-red-500 duration-300"></AiOutlineHeart>
      </div>
    </div>
  );
}

export default StoreCardItem;
