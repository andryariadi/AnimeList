import Card from "./components/Card";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const anime = await response.json();
  // console.log(anime.data, "<<<<<<<dipage");

  return (
    <>
      <h1>Welcome Animelist</h1>
      <div className="grid grid-cols-3 gap-3">
        {anime.data.map((data) => {
          return <Card dataAnime={data} />;
        })}
      </div>
    </>
  );
}
