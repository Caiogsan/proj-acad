import StoreNavbar from "../components/layouts/store/StoreNavbar";
import banner from "../img/store/banner.webp";
import bannerNutrata from "../img/store/banner_nutrata.webp";
import StoreMostSell from "../components/layouts/store/StoreMostSell";
import StoreSpecialCombo from "../components/layouts/store/StoreSpecialCombo";
import StoreNewsLetter from "../components/layouts/store/StoreNewsletter";
import FooterStore from "../components/items/storeItems/FooterStore";
import InfoLine from "../components/layouts/store/StoreInfoLine";
import NutrataProductsLine from "../components/layouts/store/NutrataProductsLine";

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
