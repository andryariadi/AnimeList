import Image from "next/image";
import Link from "next/link";

export default function Card({ dataAnime }) {
  console.log(dataAnime, "<<<<<dicardcomponent");
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[100%] lg:w-[80%] mx-auto px-10 md:px-0 lg:px-0 hover:text-amber-500">
          {dataAnime.data?.map((el) => {
            return (
              <Link href={`/${el.mal_id}`} className="card shadow-xl rounded-lg cursor-pointer text-slate-300 hover:text-amber-500 transition-all duration-500" key={el.mal_id}>
                <Image className="rounded-tl-lg rounded-tr-lg h-[340px] object-fill" src={el.images.webp.image_url} alt="Card" width={500} height={500} />
                <h3 className="font-bold text-sm md:text-xl p-4">{el.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
