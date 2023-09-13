import {imgData} from "../data/imgData"
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'

function ImageRoler(){
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 300
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 300
    }
    return (
        <div className="pt-6 flex px-6 md:px-16 w-[100%]">
            <div onClick={slideLeft} className="h-[245px] mt-8 md:pr-10 flex items-center"><MdChevronLeft className="cursor-pointer opacity-50 hover:opacity-100 duration-500" size={40}></MdChevronLeft></div>                 
            <div id="slider" className={`scrollbar-hide m-auto gap-x-16 pt-8 h-[350px]  flex scroll scroll-smooth overflow-x-scroll`}>
                {imgData.map((item)=> (
                    <img className="h-60 hover:scale-110 ease-in-out duration-500 cursor-pointer w-96" src={item.img} alt="/"></img>
                ))}  
            </div>
            <div onClick={slideRight} className="h-[245px] mt-8 md:pl-10 flex items-center"><MdChevronRight className="cursor-pointer opacity-50 hover:opacity-100 duration-500" size={40}></MdChevronRight></div> 
        </div>
    )
}

export default ImageRoler