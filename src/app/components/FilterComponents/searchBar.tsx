"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import SearchIcon from "../icons/SearchIcon";

export default function SearchBar({
  placeholder,
  name,
  setSearch,
}: SearchBarProps) {
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newText = event.target.value;

    setInputText(newText);
    setSearch(newText);
  };

  return (
    <div className="w-full px-[11px] h-[40px] rounded-[3px] border-[1px] border-custGray bg-darkestBlue flex items-center gap-[11px] text-custWhite">
      <SearchIcon className="w-[22px] h-[22px] " />
      <input
        onChange={handleInputChange}
        value={inputText}
        type={"text"}
        name={name}
        placeholder={placeholder}
        className="select-none outline-none text-[14px] bg-transparent w-full h-full"
      />
    </div>
  );
}
