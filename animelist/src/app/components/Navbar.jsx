import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="container mx-auto">
          <div className="bg-sky-600 py-5 px-3 md:px-[150px] flex justify-between">
            <Link href="/" className="font-bold text-2xl text-white">
              iAnime
            </Link>
            <input type="text" placeholder="search..." className="rounded-lg px-3 focus:border-accent outline-none" />
          </div>
        </div>
      </header>
    </>
  );
}
