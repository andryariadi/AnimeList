import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/assets/icon-navbar.svg";
import LoginGithub from "./LoginGithub";
import InputSearch from "./InputSearch";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="mx-auto">
          <div className="bg-amber-500 py-5 px-3 lg:px-[150px] flex justify-between">
            <Link href="/" className="font-bold text-2xl text-white">
              <Image src={Icon} width={150} height={150} />
            </Link>
            <div className="flex relative">
              <InputSearch />
            </div>
            <div className="flex align items-center gap-x-3">
              <div>
                <Link href="/profile" className="flex items-center gap-x-1 text-slate-700">
                  <p>UserName</p>
                  <FaUser size={23} />
                </Link>
              </div>
              <LoginGithub />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
