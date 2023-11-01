import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from "react-icons/tb";

export default function Pagination({ number, nextPage, lastPage }) {
  const handleNextPage = () => {
    nextPage((next) => next + 1);
  };

  const handlePrevPage = () => {
    nextPage((prev) => prev - 1);
  };
  return (
    <>
      <div className="flex justify-center items-center gap-x-5 py-5 text-slate-200 hover:text-amber-500 transition-all duration-500 w-fit mx-auto">
        <div onClick={handlePrevPage} className="flex items-center gap-x-1">
          <button>
            <TbPlayerTrackPrevFilled size={24} />
          </button>
          <p className="cursor-pointer">Prev</p>
        </div>
        <p>
          {number} of {lastPage}
        </p>
        <div onClick={handleNextPage} className="flex items-center gap-x-1">
          <p className="cursor-pointer">Next</p>
          <button>
            <TbPlayerTrackNextFilled size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
