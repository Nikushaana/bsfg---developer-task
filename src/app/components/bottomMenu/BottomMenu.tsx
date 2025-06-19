import React from "react";
import HomeBtnIcon from "../icons/HomeBtnIcon";
import SearchMenuIcon from "../icons/SearchMenuIcon";
import ChatIcon from "../icons/ChatIcon";
import BurgerMenuIcon from "../icons/BurgerMenuIcon";
import MiddleBtnIcon from "../icons/MiddleBtnIcon";

export default function BottomMenu() {
  return (
    <div className="hidden max-[800px]:flex justify-around gap-[20px] items-center fixed bottom-0 z-[2] left-0 w-[100vw] h-[60px] border-[1px] border-custGray  rounded-t-[5px] bg-[#10212E] py-[5px] px-[40px]">
      <div className="flex flex-col items-center">
        <HomeBtnIcon className="w-[24px] h-[24px] text-custWhite" />
        <h1 className="text-white text-[11px]">Home</h1>
      </div>
      <div className="flex flex-col items-center">
        <SearchMenuIcon className="w-[24px] h-[24px] text-custWhite" />
        <h1 className="text-white text-[11px]">Search</h1>
      </div>
      <div className="w-[50px] h-[50px] rounded-full bg-freshBlue text-white flex items-center justify-center">
        <MiddleBtnIcon className="text-white w-[24px] h-[24px]" />
      </div>
      <div className="flex flex-col items-center">
        <ChatIcon className="w-[24px] h-[24px] text-custWhite" />
        <h1 className="text-white text-[11px]">Chat</h1>
      </div>
      <div className="flex flex-col items-center">
        <BurgerMenuIcon className="w-[24px] h-[24px] text-custWhite" />
        <h1 className="text-white text-[11px]">Menu</h1>
      </div>
    </div>
  );
}
