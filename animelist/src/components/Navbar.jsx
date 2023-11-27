"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/assets/icon-navbar.svg";
import { BiSearchAlt } from "react-icons/bi";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
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
      <header>
        <div className="mx-auto">
          <div className="bg-amber-500 py-5 px-3 lg:px-[150px] flex justify-between">
            <Link href="/" className="font-bold text-2xl text-white">
              <Image src={Icon} width={150} height={150} />
            </Link>
            <div className="flex relative">
              <input type="text" placeholder="search..." className="rounded-lg px-3 focus:border-accent outline-none" ref={searchRef} onKeyDown={handleSerach} />
              <button onClick={handleSerach} className="absolute end-[5px] top-[5px] text-slate-500 hover:scale-110 transition-all duration-500">
                <BiSearchAlt size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
