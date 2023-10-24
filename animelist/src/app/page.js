import Card from "./components/Card";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();
  // console.log(anime.data, "<<<<<<<dipage");

  return (
    <>
      <h1>Welcome Animelist</h1>
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
