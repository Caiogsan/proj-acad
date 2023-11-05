import { useContext } from "react";
import StoreCardLine from "../../items/storeItems/StoreCardLine";
import { StoreCardContext } from "../../items/storeItems/StoreCardContext";

function NutrataProductsLine() {
  const { image, title, cost, description } = useContext(StoreCardContext);
  return (
    <div>
      <StoreCardLine
        imgItem1={image[0]}
        imgItem2={image[6]}
        imgItem3={image[2]}
        imgItem4={image[3]}
        titleItem1={title[0]}
        titleItem2={title[6]}
        titleItem3={title[2]}
        titleItem4={title[3]}
        costItem1={cost[0]}
        costItem2={cost[6]}
        costItem3={cost[2]}
        costItem4={cost[3]}
        descripItem1={description[0]}
        descripItem2={description[6]}
        descripItem3={description[2]}
        descripItem4={description[3]}
        stylesLine={" w-[95%]"}
      ></StoreCardLine>
      <div className="my-10 w-full flex justify-center">
        <button className="bg-black tracking-wider text-white rounded-full px-10 py-2 font-info font-semibold">
          CONFIRA A LINHA COMPLETA
        </button>
      </div>
    </div>
  );
}

export default NutrataProductsLine;
