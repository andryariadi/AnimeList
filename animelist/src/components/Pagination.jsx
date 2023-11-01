import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from "react-icons/tb";

export default function Pagination({ number }) {
  return (
    <>
      <div className="flex justify-center items-center gap-x-5 py-5 text-slate-200 hover:text-amber-500 w-fit mx-auto">
        <button>
          <TbPlayerTrackPrevFilled size={24} />
        </button>
        <p>{number}</p>
        <button>
          <TbPlayerTrackNextFilled size={24} />
        </button>
      </div>
    </>
  );
}
