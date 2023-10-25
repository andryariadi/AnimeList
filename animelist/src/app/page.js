import Link from "next/link";
import Card from "./components/Card";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();
  // console.log(anime.data, "<<<<<<<dipage");

  return (
    <>
      <div className="flex justify-between py-5 px-[150px]">
        <h1 className="text-2xl font-bold">Welcome Animelist</h1>
        <Link href="/populer" className="bg-white border-yellow-600 border-2 hover:bg-yellow-500 transition-all duration-500 hover:text-white font-medium text-yellow-600 py-1 px-3 rounded-lg">
          See All
        </Link>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[100%] lg:w-[80%] mx-auto px-10 md:px-0 lg:px-0">
          {anime.data.map((data) => {
            return <Card dataAnime={data} key={data.mal_id} />;
          })}
        </div>
      </div>
    </>
  );
}
