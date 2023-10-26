import Link from "next/link";
import Card from "../components/Card";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();
  // console.log(anime.data, "<<<<<<<dipage");

  return (
    <>
      <div className="flex justify-between items-center py-5 px-3 md:px-10 lg:px-[150px]">
        <h1 className="text-2xl font-bold">Top Anime</h1>
        <Link href="/populer" className="bg-white border-yellow-600 border-2 hover:bg-yellow-500 transition-all duration-500 hover:text-white font-medium text-yellow-600 py-1 px-3 rounded-lg">
          See All
        </Link>
      </div>
      <Card dataAnime={topAnime} key={topAnime.mal_id} />
    </>
  );
}
