import StoreCardLine from "./StoreCardLine";
import { useContext } from "react";
import { StoreCardContext } from "./StoreCardContext";

function StoreSpecialCombo() {
  const { image, title, description, cost, rate } =
    useContext(StoreCardContext);
  return (
    <div className="px-6 mx-4">
      <div className="text-center text-xs font-most pt-16 pb-4">
        <span className="bg-orange-100 rounded px-2 text-orange-500 py-1">
          CONFIRA NOSSOS COMBOS ESPECIAIS
        </span>
      </div>
      <div className="flex items-center w-full mb-12">
        <div className="flex flex-col gap-[1px] w-[44%]">
          <div className="border-b-2 w-full border-gray-300"></div>
          <div className="border-t-2 w-full border-gray-300"></div>
        </div>
        <h1 className="w-[12%] text-center text-xl font-most font-semibold">
          COMBOS
        </h1>
        <div className="w-[44%] flex flex-col gap-[1px]">
          <div className="border-b-2 w-full border-gray-300"></div>
          <div className="border-t-2 w-full border-gray-300"></div>
        </div>
      </div>
      <StoreCardLine
        imgItem1={image[6]}
        titleItem1={title[6]}
        descripItem1={description[6]}
        costItem1={cost[6]}
        imgItem2={image[5]}
        titleItem2={title[5]}
        descripItem2={description[5]}
        costItem2={cost[5]}
        imgItem3={image[8]}
        titleItem3={title[8]}
        descripItem3={description[8]}
        costItem3={cost[8]}
        imgItem4={image[7]}
        titleItem4={title[7]}
        descripItem4={description[7]}
        costItem4={cost[7]}
      ></StoreCardLine>
    </div>
  );
}

export default StoreSpecialCombo;
