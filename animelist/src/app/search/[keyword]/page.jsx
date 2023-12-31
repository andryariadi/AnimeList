import Header from "@/components/Header";
import Card from "@/components/Card";
import { getAnimeResponse } from "@/libs/api-libs";

export default async function SearchPage({ params }) {
  const { keyword } = params;

  const decodedKeyword = decodeURI(keyword);

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  // const searchAnime = await response.json();

  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian untuk '${decodedKeyword}...'`} />
        <Card dataAnime={searchAnime} key={searchAnime.mal_id} />
      </section>
    </>
  );
}
