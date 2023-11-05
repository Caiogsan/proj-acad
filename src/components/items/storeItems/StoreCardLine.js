import { useEffect, useState } from "react";
import { getData } from "./StoreData";
import StoreCardItem from "./StoreCardItem";

function StoreCardLine({
  stylesLine,
  imgItem1,
  imgItem2,
  imgItem3,
  imgItem4,
  titleItem1,
  titleItem2,
  titleItem3,
  titleItem4,
  costItem1,
  costItem2,
  costItem3,
  costItem4,
  descripItem1,
  descripItem2,
  descripItem3,
  descripItem4,
}) {
  return (
    <div className={`flex ${stylesLine} gap-4 m-auto justify-between`}>
      <StoreCardItem
        cost={costItem1}
        description={descripItem1}
        title={titleItem1}
        image={imgItem1}
      ></StoreCardItem>
      <StoreCardItem
        cost={costItem2}
        description={descripItem2}
        title={titleItem2}
        image={imgItem2}
      ></StoreCardItem>
      <StoreCardItem
        cost={costItem3}
        description={descripItem3}
        title={titleItem3}
        image={imgItem3}
      ></StoreCardItem>
      <StoreCardItem
        cost={costItem4}
        description={descripItem4}
        title={titleItem4}
        image={imgItem4}
      ></StoreCardItem>
    </div>
  );
}

export default StoreCardLine;
