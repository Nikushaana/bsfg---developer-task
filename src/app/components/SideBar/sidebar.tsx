"use client";

import React, { useState } from "react";
import PromotionsIcon from "../icons/PromotionsIcon";
import VipClubIcon from "../icons/VipClubIcon";
import TournamentsIcon from "../icons/TournamentsIcon";
import SlotsIcon from "../icons/SlotsIcon";
import BlackjackIcon from "../icons/BlackjackIcon";
import RouletteIcon from "../icons/RouletteIcon";
import BaccaratIcon from "../icons/BaccaratIcon";
import LiveDealerIcon from "../icons/LiveDealerIcon";
import CrashIcon from "../icons/CrashIcon";
import DiceIcon from "../icons/DiceIcon";
import VideoPockerIcon from "../icons/VideoPockerIcon";
import FavoritesIcon from "../icons/FavoritesIcon";
import RecentIcon from "../icons/RecentIcon";
import CollectionsIcon from "../icons/CollectionsIcon";
import ProvidersIcon from "../icons/ProvidersIcon";
import SupportIcon from "../icons/SupportIcon";
import EnglishIcon from "../icons/EnglishIcon";
import BurgerMenuIcon from "../icons/BurgerMenuIcon";

export default function Sidebar() {
  const [sideBarItems, setSideBarItems] = useState([
    {
      id: 1,
      itemsGroup: [
        {
          id: 1,
          icon: <PromotionsIcon className="w-[22px] h-[22px]" />,
          title: "Promotions",
        },
        {
          id: 2,
          icon: <VipClubIcon className="w-[22px] h-[22px]" />,
          title: "VIP Club",
        },
        {
          id: 3,
          icon: <TournamentsIcon className="w-[22px] h-[22px]" />,
          title: "Tournaments",
        },
      ],
    },
    {
      id: 2,
      itemsGroup: [
        {
          id: 1,
          icon: <SlotsIcon className="w-[22px] h-[22px]" />,
          title: "Slots",
        },
        {
          id: 2,
          icon: <BlackjackIcon className="w-[22px] h-[22px]" />,
          title: "Blackjack",
        },
        {
          id: 3,
          icon: <RouletteIcon className="w-[22px] h-[22px]" />,
          title: "Roulette",
        },
        {
          id: 4,
          icon: <BaccaratIcon className="w-[22px] h-[22px]" />,
          title: "Baccarat",
        },
        {
          id: 5,
          icon: <LiveDealerIcon className="w-[22px] h-[22px]" />,
          title: "Live Dealer",
        },
        {
          id: 6,
          icon: <CrashIcon className="w-[22px] h-[22px]" />,
          title: "Crash",
        },
        {
          id: 7,
          icon: <DiceIcon className="w-[22px] h-[22px]" />,
          title: "Dice",
        },
        {
          id: 8,
          icon: <VideoPockerIcon className="w-[22px] h-[22px]" />,
          title: "Video Poker",
        },
      ],
    },
    {
      id: 3,
      itemsGroup: [
        {
          id: 1,
          icon: <FavoritesIcon className="w-[22px] h-[22px]" />,
          title: "Favorites",
        },
        {
          id: 2,
          icon: <RecentIcon className="w-[22px] h-[22px]" />,
          title: "Recent",
        },
      ],
    },
    {
      id: 4,
      itemsGroup: [
        {
          id: 1,
          icon: <CollectionsIcon className="w-[26px] h-[26px]" />,
          title: "Collections",
        },
        {
          id: 2,
          icon: <ProvidersIcon className="w-[22px] h-[22px]" />,
          title: "Providers",
        },
      ],
    },
    {
      id: 5,
      itemsGroup: [
        {
          id: 1,
          icon: <SupportIcon className="w-[22px] h-[22px]" />,
          title: "Support",
        },
        {
          id: 2,
          icon: <EnglishIcon className="w-[22px] h-[22px]" />,
          title: "English",
        },
      ],
    },
  ]);

  const [openBar, setOpenBar] = useState(false);

  return (
    <div
      className={`bg-darkBlue py-[9px] border-r-[1px] border-custGray flex flex-col text-custWhite duration-100 shrink-0 max-[800px]:hidden ${
        openBar ? "px-[30px]" : "px-[10px] "
      }`}
    >
      <div className="sticky top-[10px]">
        <div
          onClick={() => {
            setOpenBar((prev: boolean) => !prev);
          }}
          className={`w-[40px] h-[40px] flex items-center justify-center cursor-pointer duration-400  ${
            openBar && "rotate-[360deg]"
          }`}
        >
          <BurgerMenuIcon className="w-[22px] h-[22px]" />
        </div>
        {sideBarItems.map((item) => (
          <div
            key={item.id}
            className={`rounded-[5px] mt-[10px] duration-100 ${
              openBar ? "bg-lightDarkBlue " : "bg-translate"
            }`}
          >
            {item.itemsGroup.map((item1) => (
              <div key={item1.id} className="flex items-center cursor-pointer">
                <div className="w-[40px] h-[40px] flex items-center justify-center">
                  {item1.icon}
                </div>
                <h1
                  className={`duration-100 truncate ${
                    openBar ? "w-[160px]" : "w-0 overflow-hidden"
                  }`}
                >
                  {item1.title}
                </h1>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
