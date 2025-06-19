"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "./searchBar";
import DropDown from "../DropDown/DropDown";
import CollectionsIcon from "../icons/CollectionsIcon";
import ProvidersIcon from "../icons/ProvidersIcon";
import HorizontalScrollBar from "./HorizontalScrollBar";
import GamesSlider from "../banners/gamesSlider";
import FeaturedIcon from "../icons/FeaturedIcon";
import LightIcon from "../icons/LightIcon";
import FireIcon from "../icons/FireIcon";
import BonusIcon from "../icons/BonusIcon";
import LiveIcon from "../icons/LiveIcon";
import ProvidersSliderIcon from "../icons/ProvidersSliderIcon";
import { axiosFront } from "../data/axios";

export default function MainFilterComponent() {
  const [allProviders, setAllProviders] = useState<Provider[]>([
    {
      id: 1,
      text: "bgaming",
    },
    {
      id: 2,
      text: "gamebeat",
    },
    {
      id: 3,
      text: "pragmatic play",
    },
    {
      id: 4,
      text: "netent",
    },
    {
      id: 5,
      text: "playtech",
    },
  ]);

  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState("");
  const [provider, setProvider] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setGames([]);
    const params = new URLSearchParams();

    if (search.length > 3) params.append("search", search);
    params.append("providers", provider);
    categories.forEach((category) => params.append("categories[]", category));
    params.append("limit", "100");

    axiosFront
      .get("games/list.php", { params })
      .then(({ data }) => {
        setGames(data?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search, provider, categories]);

  return (
    <div className="flex flex-col gap-y-[15px]">
      <div className="grid grid-cols-6 gap-[10px] relative">
        <div className="col-span-4 max-[800px]:col-span-6">
          <SearchBar placeholder="Search your game" setSearch={setSearch} />
        </div>
        <div className="max-[800px]:col-span-3 max-[800px]:order-3">
          <DropDown
            icon={<CollectionsIcon className="w-[26px] h-[26px]" />}
            placeholder="Collections"
            data={allProviders}
          />
        </div>
        <div className="max-[800px]:col-span-3 max-[800px]:order-4">
          <DropDown
            icon={<ProvidersIcon className="w-[23px] h-[23px]" />}
            placeholder="Providers"
            data={allProviders}
            provider={provider}
            setProvider={setProvider}
          />
        </div>
        <div className="col-span-6 max-[800px]:order-2">
          <HorizontalScrollBar
            setCategories={setCategories}
            categories={categories}
          />
        </div>
      </div>
      <GamesSlider
        title="Featured Games"
        icon={<FeaturedIcon className="w-[22px] h-[22px]" />}
        data={games.filter((game) =>
          game.categories.includes("featured-games")
        )}
        cardType="1"
      />
      <GamesSlider
        title="New Releases"
        icon={<LightIcon className="w-[22px] h-[22px]" />}
        data={games.filter((game) => game.categories.includes("new-releases"))}
        cardType="1"
      />
      <GamesSlider
        title="Hot Games"
        icon={<FireIcon className="w-[22px] h-[22px]" />}
        data={games.filter(
          (game) =>
            game.categories.includes("hot") ||
            game.categories.includes("hot-games")
        )}
        cardType="1"
      />
      <GamesSlider
        title="Bonus Buy"
        icon={<BonusIcon className="w-[22px] h-[22px]" />}
        data={games.filter((game) => game.categories.includes("bonus-buy"))}
        cardType="1"
      />
      <GamesSlider
        title="Live Games"
        icon={<LiveIcon className="w-[22px] h-[22px]" />}
        data={games.filter((game) => game.categories.includes("live"))}
        cardType="1"
      />
      <GamesSlider
        title="Providers"
        icon={<ProvidersSliderIcon className="w-[22px] h-[22px]" />}
        data={games}
        cardType="2"
      />
    </div>
  );
}
