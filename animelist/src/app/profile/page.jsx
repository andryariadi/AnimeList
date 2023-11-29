import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

export default async function Profile() {
  const user = await authUserSession();

  return (
    <>
      <div className="flex items-center justify-center h-screen gap-x-3">
        <div className="border border-amber-500 rounded-lg py-10 px-28 flex items-center gap-x-3">
          <div>{user?.image ? <Image className="rounded-full" src={user.image} alt="Profile" width={200} height={200} /> : <FaUserCircle size={200} color="#fff" />}</div>
          <div className="flex flex-col gap-y-5">
            <h4 className="text-xl font-bold text-zinc-300">{user.name}</h4>
            <h4 className="text-xl font-bold text-zinc-300">{user.email}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
