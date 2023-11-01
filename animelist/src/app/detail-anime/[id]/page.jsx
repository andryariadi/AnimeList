import { getAnimeResponse } from "@/app/libs/api-libs";

export default async function DetailAnime({ params }) {
  const { id } = params;

  const anime = await getAnimeResponse(`anime/${id}`);
  const dataAnime = anime.data;

  return (
    <>
      <div className="py-5 px-3 md:px-10 lg:px-[150px]">
        <h1 className="text-2xl font-bold text-zinc-300">{dataAnime.title}</h1>
      </div>
    </>
  );
}
