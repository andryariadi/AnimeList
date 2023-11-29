"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { BiSearchAlt } from "react-icons/bi";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSerach = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() === "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);

      searchRef.current.value = "";
    }
  };
  return (
    <>
      <input type="text" placeholder="search..." className="rounded-lg px-3 focus:border-accent outline-none" ref={searchRef} onKeyDown={handleSerach} />
      <button onClick={handleSerach} className="absolute end-[5px] top-[5px] text-slate-500 hover:scale-110 transition-all duration-500">
        <BiSearchAlt size={24} />
      </button>
    </>
  );
}
