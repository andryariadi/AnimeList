import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";

export default async function DetailAnime({ params }) {
  const { id } = params;

  const anime = await getAnimeResponse(`anime/${id}`);
  const dataAnime = anime.data;

  console.log(dataAnime);

  return (
    <>
      <div className="py-5 px-3 md:px-10 lg:px-[150px]">
        <h1 className="text-2xl font-bold text-zinc-300">{dataAnime.title}</h1>
      </div>
      <div className="container mx-auto">
        <div className="flex gap-x-3 w-[100%] lg:w-[80%] mx-auto">
          <div className="flex-1">
            <Image className="rounded-md h-full" src={dataAnime.trailer.images.maximum_image_url} alt="Anime" width={700} height={700} />
          </div>
          <div className="flex-1 text-zinc-300 text-justify">
            <h2 className="text-xl font-semibold underline underline-offset-8 decoration-amber-500 mb-3">Synopsis</h2>
            <p>{dataAnime.synopsis}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-x-5 py-5 px-3 md:px-10 lg:px-[150px] text-zinc-300">
        <div className="flex flex-col items-center border-e-2 pe-3 border-amber-500">
          <p className="bg-amber-500 py-1 px-3 mb-2 rounded-md flex justify-center items-center text-xs">Score</p>
          <h2 className="text-3xl font-semibold">{dataAnime.score}</h2>
          <p className="text-sm">{dataAnime.scored_by.toLocaleString()} user</p>
        </div>
        <div className="flex flex-col justify-around">
          <div className="flex gap-x-5">
            <h2 className="text-xl">
              Ranked <span className="font-semibold">#{dataAnime.rank}</span>
            </h2>
            <h2 className="text-xl">
              Popularity <span className="font-semibold">#{dataAnime.popularity}</span>
            </h2>
            <h2 className="text-xl">
              Members <span className="font-semibold">{dataAnime.members.toLocaleString()}</span>
            </h2>
          </div>
          <div className="flex gap-x-5 text-cyan-500 justify-center text-xs w-fit">
            <p className="text-xs">{dataAnime.rating}</p> | <p className="text-xs">{dataAnime.type}</p> |
            <p className="text-xs">
              {dataAnime.season} {dataAnime.year}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
