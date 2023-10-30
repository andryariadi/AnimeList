import Link from "next/link";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <>
      <div className="flex justify-between items-center py-5 px-3 md:px-10 lg:px-[150px]">
        <h1 className="text-2xl font-bold text-zinc-300">{title}</h1>
        {linkTitle ? (
          <Link href={linkHref} className="bg-zinc-800 border-yellow-600 border-2 hover:bg-yellow-500 transition-all duration-500 hover:text-white font-medium text-yellow-600 py-1 px-3 rounded-lg">
            {linkTitle}
          </Link>
        ) : null}
      </div>
    </>
  );
}
