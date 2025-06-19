"use client";

import React, { useEffect, useRef, useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
import DiceIcon from "../icons/DiceIcon";

export default function DropDown({
  data,
  icon,
  placeholder,
  name,
  setAllValues,
}: DropDownProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [drop, setDrop] = useState(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (setAllValues && value !== undefined) {
      setAllValues((prev) => ({ ...prev, [name]: value }));
    }
  }, [value]);

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

  useEffect(() => {
    if (drop) {
      inputRef.current?.focus();
    }
  }, [drop]);

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
          {value ? (
            <p className="text-[14px]">{value}</p>
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
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className={`flex items-center h-[40px] shrink-0 relative ${
              false ? "bg-contentBgColor" : ""
            }`}
          >
            <div
              className={`h-full w-[5px] ${
                false ? "bg-freshBlue" : "bg-transparent"
              }`}
            ></div>
            <div className="flex items-center gap-[10px] h-full text-custWhite pl-[10px]">
              <DiceIcon className="w-[23px] h-[23px]" />
              <p className="text-[14px]">{placeholder}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
