import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from "react-icons/tb";

export default function Pagination({ number, setPage, lastPage }) {
  const scroolTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((next) => next + 1);
    scroolTop();
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
    scroolTop();
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
