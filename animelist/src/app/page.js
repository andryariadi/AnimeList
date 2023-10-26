import Header from "@/components/Header";
import Card from "../components/Card";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();
  // console.log(anime.data, "<<<<<<<dipage");

  return (
    <>
      <section>
        <Header title="Top Anime" linkHref="/populer" linkTitle="See All" />
        <Card dataAnime={topAnime} key={topAnime.mal_id} />
      </section>
      <section>
        <Header title="Recomendation" linkHref="/recomendation" linkTitle="" />
        <Card dataAnime={topAnime} key={topAnime.mal_id} />
      </section>
    </>
  );
}
