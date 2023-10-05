import {imgData} from "../data/imgData"
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'

function ImageRoler(){
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 300
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 300
    }
    return (
        <div className="flex w-[100%]">
            <div onClick={slideLeft} className="h-[245px] mt-8 flex items-center"><MdChevronLeft className="cursor-pointer opacity-50 hover:opacity-100 duration-500" size={40}></MdChevronLeft></div>                 
            <div id="slider" className={`scrollbar-hide m-auto w-[80%] gap-x-16 pt-8 h-[350px]  flex scroll scroll-smooth overflow-x-scroll`}>
                {imgData.map((item)=> (
                    <img className="h-60 hover:scale-110 ease-in-out duration-500 cursor-pointer w-96" src={item.img} alt="/"></img>
                ))}  
            </div>
            <div onClick={slideRight} className="bg-black w-10 h-[245px] mt-8 flex items-center"><MdChevronRight className="cursor-pointer opacity-50 hover:opacity-100 duration-500" size={40}></MdChevronRight></div> 
        </div>
    )
}

export default ImageRoler