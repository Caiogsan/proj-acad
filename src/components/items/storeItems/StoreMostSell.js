import StoreCardLine from "./StoreCardLine";
import { StoreCardContext } from "./StoreCardContext";
import { useContext } from "react";

function StoreMostSell() {
  const { image, cost, title, rate, description } =
    useContext(StoreCardContext);
  return (
    <div className="bg-gray-50 py-16 px-6 mx-4">
      <div className="text-center text-xs font-most pb-4">
        <span className="bg-orange-100 rounded px-2 text-orange-500 py-1">
          VEJA O QUE NOSSOS CLIENTES ESTÃO COMPRANDO
        </span>
      </div>
      <div className="flex items-center w-full mb-12">
        <div className="flex flex-col gap-[1px] w-[42%]">
          <div className="border-b-2 w-full border-gray-300"></div>
          <div className="border-t-2 w-full border-gray-300"></div>
        </div>
        <h1 className="w-[16%] text-center text-xl font-most font-semibold">
          MAIS VENDIDOS
        </h1>
        <div className="w-[42%] flex flex-col gap-[1px]">
          <div className="border-b-2 w-full border-gray-300"></div>
          <div className="border-t-2 w-full border-gray-300"></div>
        </div>
      </div>
      <StoreCardLine
        imgItem1={image[4]}
        titleItem1={title[4]}
        descripItem1={description[4]}
        costItem1={cost[4]}
        imgItem2={image[11]}
        titleItem2={title[11]}
        descripItem2={description[11]}
        costItem2={cost[11]}
        imgItem3={image[1]}
        titleItem3={title[1]}
        descripItem3={description[1]}
        costItem3={cost[1]}
        imgItem4={image[7]}
        titleItem4={title[7]}
        descripItem4={description[7]}
        costItem4={cost[7]}
      ></StoreCardLine>
    </div>
  );
}

export default StoreMostSell;
