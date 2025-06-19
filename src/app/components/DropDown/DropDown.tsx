"use client";

import React, { useEffect, useRef, useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
import DiceIcon from "../icons/DiceIcon";

export default function DropDown({
  data,
  icon,
  placeholder,
  provider,
  setProvider,
}: DropDownProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [drop, setDrop] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      targetRef.current &&
      !(targetRef.current as HTMLDivElement).contains(event.target as Node)
    ) {
      setDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={targetRef} className="relative w-full">
      <div
        onClick={() => {
          setDrop((pre) => !pre);
        }}
        className={`w-full h-[40px] p-[8px] pl-[13px] flex items-center rounded-[5px] border-[1px] border-custGray cursor-pointer bg-darkestBlue`}
      >
        <div className="flex items-center gap-[10px] w-[calc(100%-24px)] h-full text-white">
          {icon}
          {provider ? (
            <p className="text-[14px] truncate">{provider}</p>
          ) : (
            <p className="text-[14px]">{placeholder}</p>
          )}
        </div>
        <div
          className={`w-[24px] h-[24px] flex items-center justify-center bg-lightDarkBlue rounded-[5px] border-[1px] border-custGray`}
        >
          <ArrowIcon
            className={`w-[10px] h-[10px] text-white duration-200 ${
              drop ? "rotate-[180deg]" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`absolute w-full z-[2] bg-darkestBlue border-[1px] border-custGray rounded-[5px] flex flex-col duration-100 overflow-y-scroll notshowScrollVert ${
          drop ? "py-[5px]" : "py-0 h-0"
        }`}
      >
        {data.map((item: any) => (
          <div
            key={item.id}
            onClick={() =>
              setProvider((prev: string) =>
                prev == item.text ? "" : item.text
              )
            }
            className={`flex items-center h-[40px] shrink-0 relative cursor-pointer ${
              provider == item.text ? "bg-contentBgColor" : ""
            }`}
          >
            <div
              className={`h-full w-[5px] ${
                provider == item.text ? "bg-freshBlue" : "bg-transparent"
              }`}
            ></div>
            <div className="flex items-center gap-[10px] h-full text-custWhite pl-[10px]">
              <DiceIcon className="w-[23px] h-[23px]" />
              <p className="text-[14px]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
