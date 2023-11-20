import imageSlide from "../../assets/new/last-generation.jpg";

function NormalSlide() {
  return (
    <div className="h-[600px] xl:h-[820px] w-[90%] rounded flex flex-col sm:flex-row m-auto bg-gray-300 my-12">
      <img
        className="sm:w-[50%] h-[60%] sm:h-full  rounded"
        alt="slideImage"
        src={imageSlide}
      ></img>
      <div className="sm:w-[50%] h-[40%] sm:h-full border-2 border-black rounded border-t-0 sm:border-t-2 sm:border-l-0">
        <div className="w-[80%] m-auto items-center sm:gap-16 lg:gap-24 justify-center tracking-widest flex flex-col h-full">
          <h1 className=" font-bold md:leading-[60px] lg:leading-[60px] sm:leading-[50px] leading-[55px] lg:text-2xl text-center md:text-xl sm:text-lg text-sm">
            EQUIPAMENTOS DE ULTIMA GERAÇÃO
          </h1>
          <p className=" md:leading-[50px] lg:leading-[50px]  leading-[45px] lg:text-xl sm:text-md text-[10px] text-center">
            As áreas de musculação e atividades extras são equipadas com o que
            há de mais morderno no mercado fitness. Venha conferir e fazer parte
            da nossa familia!
          </p>
        </div>
      </div>
    </div>
  );
}

export default NormalSlide;
