import AboutCasinoComponent from "./components/aboutCasinoComponent";
import BuyNowBanner from "./components/banners/buyNowBanner";
import FirstSliderBanner from "./components/banners/firstSliderBanner";
import GamesSlider from "./components/banners/gamesSlider";
import SecondBanner from "./components/banners/secondBanner";
import DropDown from "./components/DropDown/DropDown";
import HorizontalScrollBar from "./components/FilterComponents/HorizontalScrollBar";
import SearchBar from "./components/FilterComponents/searchBar";
import BonusIcon from "./components/icons/BonusIcon";
import CollectionsIcon from "./components/icons/CollectionsIcon";
import FeaturedIcon from "./components/icons/FeaturedIcon";
import FireIcon from "./components/icons/FireIcon";
import LightIcon from "./components/icons/LightIcon";
import LiveIcon from "./components/icons/LiveIcon";
import ProvidersIcon from "./components/icons/ProvidersIcon";
import ProvidersSliderIcon from "./components/icons/ProvidersSliderIcon";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-y-[15px]">
      <FirstSliderBanner />

      <SecondBanner />
      <div className="grid grid-cols-6 gap-[10px] relative">
        <div className="col-span-4 max-[800px]:col-span-6">
          <SearchBar placeholder="Search your game" />
        </div>
        <div className="max-[800px]:col-span-3 max-[800px]:order-3">
          <DropDown
            icon={<CollectionsIcon className="w-[26px] h-[26px]" />}
            placeholder="Collections"
          />
        </div>
        <div className="max-[800px]:col-span-3 max-[800px]:order-4">
          <DropDown
            icon={<ProvidersIcon className="w-[23px] h-[23px]" />}
            placeholder="Providers"
          />
        </div>
        <div className="col-span-6 max-[800px]:order-2">
          <HorizontalScrollBar />
        </div>
      </div>
      <GamesSlider
        title="Featured Games"
        icon={<FeaturedIcon className="w-[22px] h-[22px]" />}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        cardType="1"
      />
      <GamesSlider
        title="New Releases"
        icon={<LightIcon className="w-[22px] h-[22px]" />}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        cardType="1"
      />
      <GamesSlider
        title="Hot Games"
        icon={<FireIcon className="w-[22px] h-[22px]" />}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        cardType="1"
      />
      <GamesSlider
        title="Bonus Buy"
        icon={<BonusIcon className="w-[22px] h-[22px]" />}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        cardType="1"
      />
      <GamesSlider
        title="Live Games"
        icon={<LiveIcon className="w-[22px] h-[22px]" />}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        cardType="1"
      />
      <GamesSlider
        title="Providers"
        icon={<ProvidersSliderIcon className="w-[22px] h-[22px]" />}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        cardType="2"
      />

      <BuyNowBanner />
      <AboutCasinoComponent />
    </div>
  );
}
