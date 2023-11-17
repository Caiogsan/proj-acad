import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function ContactSlide () {
  
  return (
    <div className="flex w-[90%] h-[740px] xl:h-[840px] 2xl:h-[1000px] pb-8 m-auto">
      <div className="bg-gray-300 rounded border-2 border-black sm:border-r-0 w-[100%] sm:w-[50%]">
        <form className="m-auto flex flex-col justify-between h-full 2xl:py-12 py-14 w-[80%]">
          <h1 className="text-center font-bold text-2xl">
            Envie uma mensagem!
          </h1>
          <input
            className="bg-gray-100 rounded border-[1px] h-10 p-2 border-gray-300 shadow-inner"
            type="text"
            placeholder="Nome"
          ></input>
          <input
            className="bg-gray-100 rounded border-[1px] h-10 p-2 border-gray-300 shadow-inner"
            type="email"
            placeholder="Email"
          ></input>
          <input
            className="bg-gray-100 rounded border-[1px] h-10 p-2 border-gray-300 shadow-inner"
            type="text"
            placeholder="Assunto"
          ></input>
          <textarea
            placeholder="Mensagem"
            className="resize-none h-24 2xl:h-40 rounded p-2"
          ></textarea>
          <button
            type="submit"
            className="text-sm 2xl:text-lg rounded hover:bg-yellow-400 duration-500 p-2 bg-white text-black"
          >
            Enviar!
          </button>
          <div className="flex justify-center items-center gap-12">
            <a href="/" className="text-3xl hover:text-blue-800 duration-300">
              <FaFacebook></FaFacebook>
            </a>
            <a href="/" className="text-3xl hover:text-rose-600 duration-300">
              <FaInstagram></FaInstagram>
            </a>
            <a href="/" className="text-3xl hover:text-[#25D366] duration-300">
              <FaWhatsapp></FaWhatsapp>
            </a>
          </div>
        </form>
      </div>
      <div className="w-[50%] hidden sm:flex rounded bg-fundo3 bg-no-repeat bg-cover bg-center"></div>
    </div>
  );
};

export default ContactSlide;
