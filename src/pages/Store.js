import StoreNavbar from "../components/store/StoreNavbar";
import banner from "../assets/store/banner.webp";
import bannerNutrata from "../assets/store/banner_nutrata.webp";
import StoreMostSell from "../components/store/StoreMostSell";
import StoreSpecialCombo from "../components/store/StoreSpecialCombo";
import StoreNewsLetter from "../components/store/StoreNewsletter";
import FooterStore from "../components/store/FooterStore";
import InfoLine from "../components/store/StoreInfoLine";
import NutrataProductsLine from "../components/store/NutrataProductsLine";

function Store() {
  return (
    <section className={`pt-36 bg-neutral-800`}>
      <StoreNavbar></StoreNavbar>
      <div className="bg-white">
        <img alt="banner" className="hover:cursor-pointer" src={banner} />
        <InfoLine></InfoLine>
        <img
          className="rounded-3xl w-[90%] m-auto mb-10"
          alt="nutrata"
          src={bannerNutrata}
        ></img>
        <NutrataProductsLine></NutrataProductsLine>
        <StoreMostSell></StoreMostSell>
        <StoreSpecialCombo></StoreSpecialCombo>
        <StoreNewsLetter></StoreNewsLetter>
        <FooterStore></FooterStore>
      </div>
    </section>
  );
}

export default Store;
