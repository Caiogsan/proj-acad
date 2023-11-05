import StoreInfo from "../../items/storeItems/StoreInfo";
import { FaShippingFast } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";
function InfoLine() {
  return (
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
  );
}

export default InfoLine;
