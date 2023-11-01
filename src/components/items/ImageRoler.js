import { imgData } from "../data/imgData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function ImageRoler() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 600;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 600;
  };
  return (
    <div className="flex w-[100%] pt-6">
      <div
        onClick={slideLeft}
        className="h-[245px]  w-[10%] flex md:pt-8 items-center justify-center"
      >
        <MdChevronLeft
          className="cursor-pointer opacity-50 hover:opacity-100 duration-500"
          size={40}
        ></MdChevronLeft>
      </div>
      <div
        id="slider"
        className={`scrollbar-hide w-[80%] gap-x-16 md:pt-8 h-[350px]  flex scroll scroll-smooth overflow-x-scroll`}
      >
        {imgData.map((item) => (
          <img
            className="h-60 hover:scale-110 ease-in-out duration-500 cursor-pointer w-96"
            src={item.img}
            alt="/"
          ></img>
        ))}
      </div>
      <div
        onClick={slideRight}
        className="w-[10%] h-[245px] md:pt-8 flex items-center justify-center"
      >
        <MdChevronRight
          className="cursor-pointer opacity-50 hover:opacity-100 duration-500"
          size={40}
        ></MdChevronRight>
      </div>
    </div>
  );
}

export default ImageRoler;
