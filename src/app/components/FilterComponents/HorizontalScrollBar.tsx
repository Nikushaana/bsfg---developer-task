"use client";

import React, { useState } from "react";
import LobbyIcon from "../icons/LobbyIcon";

export default function HorizontalScrollBar() {
  const [horizontalScrollData, sethorizontalScrollData] = useState([
    {
      id: 1,
      icon: <LobbyIcon className="w-[20px] h-[20px]" />,
      text: "Lobby",
    },
    {
      id: 2,
      icon: <LobbyIcon className="w-[20px] h-[20px]" />,
      text: "Slots",
    },
    {
      id: 3,
      icon: <LobbyIcon className="w-[20px] h-[20px]" />,
      text: "Blackjack",
    },
    {
      id: 4,
      icon: <LobbyIcon className="w-[20px] h-[20px]" />,
      text: "Roulette",
    },
    {
      id: 5,
      icon: <LobbyIcon className="w-[20px] h-[20px]" />,
      text: "Live",
    },
    {
      id: 6,
      icon: <LobbyIcon className="w-[20px] h-[20px]" />,
      text: "Baccarat",
    },
    {
      id: 7,
      icon: <LobbyIcon className="w-[20px] h-[20px]" />,
      text: "Crash",
    },
    {
      id: 8,
      icon: <LobbyIcon className="w-[20px] h-[20px]" />,
      text: "Dice",
    },
    {
      id: 9,
      icon: <LobbyIcon className="w-[20px] h-[20px]" />,
      text: "Video Poker",
    },
    {
      id: 10,
      icon: <LobbyIcon className="w-[20px] h-[20px]" />,
      text: "Fruits",
    },
    {
      id: 11,
      icon: <LobbyIcon className="w-[20px] h-[20px]" />,
      text: "Books",
    },
    {
      id: 12,
      icon: <LobbyIcon className="w-[20px] h-[20px]" />,
      text: "Bonus Buy",
    },
  ]);
  return (
    <div className="h-[40px]  flex gap-[10px] overflow-x-scroll notshowScrollHor">
      {horizontalScrollData.map((item) => (
        <div
          key={item.id}
          className={`h-full shrink-0 px-[10px] duration-150 cursor-pointer flex items-center gap-[10px] rounded-[5px] border-[1px] border-[#273847] ${
            true ? "bg-darkestBlue text-white" : "bg-[#223444] text-custWhite"
          }`}
        >
          {item.icon}
          <p className="text-[14px]">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
