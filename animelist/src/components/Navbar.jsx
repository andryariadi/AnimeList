import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/assets/icon-navbar.svg";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="mx-auto">
          <div className="bg-amber-500 py-5 px-3 lg:px-[150px] flex justify-between">
            <Link href="/" className="font-bold text-2xl text-white">
              <Image src={Icon} width={150} height={150} />
            </Link>
            <input type="text" placeholder="search..." className="rounded-lg px-3 focus:border-accent outline-none" />
          </div>
        </div>
      </header>
    </>
  );
}
