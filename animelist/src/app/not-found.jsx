"use client";

import Error from "@/app/assets/error.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { TbLogout2 } from "react-icons/tb";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <div className="mt-[-32px] text-amber-500 ">
        <Image src={Error} className="w-screen h-screen" />
        <div className="flex ps-3 gap-x-1 mt-[-80px] ">
          <Link href="/" className="flex gap-x-1 text-md hover:scale-105 transition-all duration-500">
            <button>
              <TbLogout2 size={22} />
            </button>
            <p>Back</p>
          </Link>
        </div>
      </div>
    </>
  );
}
