import Image from "next/image";
import Link from "next/link";

export default function Card({ dataAnime }) {
  console.log(dataAnime, "<<<<<dicardcomponent");
  return (
    <>
      <Link href={`/${dataAnime.mal_id}`} className="card shadow-xl rounded-lg cursor-pointer">
        <Image className="rounded-tl-lg rounded-tr-lg h-[340px]" src={dataAnime.images.webp.image_url} alt="Card" width={500} height={500} />
        <h3 className="font-bold text-sm md:text-xl p-4">{dataAnime.title}</h3>
      </Link>
    </>
  );
}
