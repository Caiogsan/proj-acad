import StoreInfo from "../components/items/storeItems/StoreInfo";
import StoreNavbar from "../components/items/StoreNavbar";
import banner from "../img/store/banner.webp";
import bannerNutrata from "../img/store/banner_nutrata.webp";
import { BsInstagram } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { AiOutlineGift } from "react-icons/ai";
import { BiSolidLockAlt } from "react-icons/bi";
import StoreCardLine from "../components/items/storeItems/StoreCardLine";
import StoreMostSell from "../components/items/storeItems/StoreMostSell";
import { useContext } from "react";
import { StoreCardContext } from "../components/items/storeItems/StoreCardContext";
import StoreSpecialCombo from "../components/items/storeItems/StoreSpecialCombo";
import StoreNewsLetter from "../components/items/storeItems/StoreNewsletter";

function Store() {
  const { image, title, cost, description, rate } =
    useContext(StoreCardContext);
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
        <StoreMostSell></StoreMostSell>
        <StoreSpecialCombo></StoreSpecialCombo>
        <div className="my-10 w-full flex justify-center">
          <button className="bg-black flex gap-2 items-center tracking-wider text-white rounded-full px-8 mb-10 py-2 font-info font-semibold">
            <AiOutlineGift></AiOutlineGift> CONFIRA TODOS OS COMBOS
          </button>
        </div>
        <StoreNewsLetter></StoreNewsLetter>
      </div>
    </section>
  );
}

export default Store;
