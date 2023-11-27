import Header from "@/components/Header";
import Card from "../components/Card";
import { getAnimeRecomendation, getAnimeResponse, shuffleAnime } from "../libs/api-libs";

export default async function Home() {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  let recomendationAnime = await getAnimeRecomendation("recommendations/anime", "entry");
  recomendationAnime = shuffleAnime(recomendationAnime, 4);

  console.log(recomendationAnime, "<<<<<recomendationAnime");

  return (
    <>
      <section>
        <Header title="Top Anime" linkHref="/populer" linkTitle="See All" />
        <Card dataAnime={topAnime} key={topAnime.mal_id} />
      </section>
      <section>
        <Header title="Recomendation" />
        <Card dataAnime={recomendationAnime} key={recomendationAnime.mal_id} />
      </section>
    </>
  );
}
