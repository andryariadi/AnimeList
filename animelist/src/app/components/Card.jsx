import Image from "next/image";
import Link from "next/link";

export default function Card({ dataAnime }) {
  console.log(dataAnime, "<<<<<dicardcomponent");
  return (
    <>
      <Link href={`/${dataAnime.mal_id}`} className="card shadow-xl rounded-lg cursor-pointer">
        <Image src={dataAnime.images.webp.image_url} alt="Card" width={800} height={800} />
        <h3 className="font-bold text-sm md:text-xl p-4">{dataAnime.title}</h3>
      </Link>
    </>
  );
}
