import StoreInfo from "../components/items/StoreInfo";
import StoreNavbar from "../components/items/StoreNavbar";
import banner from "../img/store/banner.webp";
import bannerNutrata from "../img/store/banner_nutrata.webp"
import { BsInstagram } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FiClock } from "react-icons/fi"; 
import { BiSolidLockAlt } from "react-icons/bi";
function Store() {
  return (
    <section className="pt-36 bg-gray-600">
      <StoreNavbar></StoreNavbar>
      <div className="bg-white">
      <img alt="banner" className="hover:cursor-pointer" src={banner} />
      <div className="bg-white grid pt-10 pb-20 gap-10 grid-cols-4 grid-rows-1 px-12">
        <StoreInfo
          stylesIcon={"text-lg"}
          titulo={"DEVOLUÇÃO"}
          subtitulo={"Trocas e devoluções rápidas"}
          icon={<FiClock />}
        ></StoreInfo>
        <StoreInfo
          stylesIcon={"text-xl"}
          titulo={"SEGURANÇA"}
          subtitulo={"Pagamento protegido e seguro."}
          icon={<BiSolidLockAlt />}
        ></StoreInfo>
        <StoreInfo
          stylesIcon={"text-lg"}
          titulo={"ATENDIMENTO"}
          subtitulo={"Fale conosco através do nosso instagram"}
          icon={<BsInstagram />}
        ></StoreInfo>
        <StoreInfo
          stylesIcon={"text-xl"}
          titulo={"ENVIO RÁPIDO"}
          subtitulo={"Envio rápido para todo o Brasil!"}
          icon={<FaShippingFast />}
        ></StoreInfo>
      </div>
      <div className="bg-white w-[90%] m-auto">
        <img className="rounded-3xl" alt="nutrata" src={bannerNutrata}></img>    
      </div>
      </div>
    </section>
  );
}

export default Store;
