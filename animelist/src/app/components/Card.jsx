import Image from "next/image";

export default function Card() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-3">
          <div>
            <Image src="https://placehold.co/600x400/png" alt="Card" width={500} height={500} />
            <h3>Judul Anime</h3>
          </div>
        </div>
      </div>
    </>
  );
}
