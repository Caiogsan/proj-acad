import StoreInfo from "../components/items/storeItems/StoreInfo";
import StoreNavbar from "../components/items/StoreNavbar";
import banner from "../img/store/banner.webp";
import bannerNutrata from "../img/store/banner_nutrata.webp";
import { BsInstagram } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { BiSolidLockAlt } from "react-icons/bi";
import StoreCardLine from "../components/items/storeItems/StoreCardLine";
import StoreMostSell from "../components/items/storeItems/StoreMostSell";

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
        <img
          className="rounded-3xl w-[90%] m-auto mb-10"
          alt="nutrata"
          src={bannerNutrata}
        ></img>
        <StoreCardLine></StoreCardLine>
        <div className="my-10 w-full flex justify-center">
          <button className="bg-black tracking-wider text-white rounded-full px-10 py-2 font-info font-semibold">CONFIRA A LINHA COMPLETA</button>
        </div>
        <StoreMostSell></StoreMostSell>
      </div>
    </section>
  );
}

export default Store;
