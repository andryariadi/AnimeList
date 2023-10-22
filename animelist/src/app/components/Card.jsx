import Image from "next/image";

export default function Card({ dataAnime }) {
  console.log(dataAnime, "<<<<<dicardcomponent");
  return (
    <>
      <div>
        <Image src={dataAnime.images.webp.image_url} alt="Card" width={500} height={500} />
        <h3>{dataAnime.title}</h3>
      </div>
    </>
  );
}
