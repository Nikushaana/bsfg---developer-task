import React from "react";
import PersonIcon from "./icons/PersonIcon";
import BellIcon from "./icons/BellIcon";
import DollarIcon from "./icons/DollarIcon";
import DepositIcon from "./icons/DepositIcon";

export default function Header() {
  return (
    <div className="bg-midBlue flex justify-center">
      <div className="w-[1200px] max-[1400px]:w-[80vw] max-[800px]:w-[100vw] shrink-0 flex items-center justify-between py-[10px] max-[800px]:px-[10px]">
        <div className="w-[75px] h-[40px] rounded-[5px] bg-contentBgColor"></div>
        <div className="flex items-center gap-[5px]">
          <div className="h-[40px] flex rounded-[5px] overflow-hidden border-[1px] border-custGray text-[white]">
            <div className="flex items-center h-full bg-darkestBlue gap-[10px] px-[10px]">
              <DollarIcon className="w-[24px] h-[24px]" />
              <h1 className="text-[14px] pr-[5px]">10,566.12</h1>
            </div>
            <div className="flex items-center justify-center h-full w-[100px] max-[800px]:w-[40px] bg-freshBlue cursor-pointer">
              <h1 className="text-[14px] max-[800px]:hidden">DEPOSIT</h1>
              <DepositIcon className="hidden max-[800px]:flex w-[24px] h-[24px] text-white" />
            </div>
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-[5px] border-[1px] border-custGray cursor-pointer text-custWhite">
            <BellIcon className="w-[20px] h-[20px]" />
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-[5px] border-[1px] border-custGray cursor-pointer text-custWhite">
            <PersonIcon className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
