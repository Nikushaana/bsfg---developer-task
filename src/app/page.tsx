import AboutCasinoComponent from "./components/aboutCasinoComponent";
import BuyNowBanner from "./components/banners/buyNowBanner";
import FirstSliderBanner from "./components/banners/firstSliderBanner";
import SecondBanner from "./components/banners/secondBanner";
import MainFilterComponent from "./components/FilterComponents/MainFilterComponent";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-y-[15px]">
      <FirstSliderBanner />
      <SecondBanner />
      <MainFilterComponent />
      <BuyNowBanner />
      <AboutCasinoComponent />
    </div>
  );
}
