import { Link } from "react-router-dom";
import ContactSlide from "../components/contact/ContactSlide";
import NormalSlide from "../components/home/NormalSlide";

function Home() {
  return (
    <section className="bg-gray-200 pb-4">
      <div>
        <section className="h-[751px] xl:h-[950px] 2xl:h-[1150px] bg-fundo1 bg-no-repeat bg-fixed bg-cover flex flex-col gap-6 md:pt-60 pt-96 md:pl-20">
          <h1 className="text-white font-bold w-full text-center md:w-64 md:text-start md:text-2xl text-md md:flex lg:text-4xl lg:w-96 lg:pt-4 ">
            VOCÊ SEMPRE EM DIA COM A SAÚDE!!
          </h1>
          <Link
            className="flex md:w-52 justify-center md:justify-start"
            to={"/about"}
          >
            <button className="font-bold h-10 border-2 hover:scale-110 border-gray-500 hover:border-white duration-500 text-sm text-white w-52 rounded">
              SAIBA MAIS!
            </button>
          </Link>
        </section>
      </div>
      <NormalSlide></NormalSlide>
      <ContactSlide></ContactSlide>
    </section>
  );
}

export default Home;
