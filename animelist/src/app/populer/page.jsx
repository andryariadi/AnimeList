"use client";

import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../libs/api-libs";

export default function Populer() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}&limit=24`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <Banner title={`Top Anime #${page}`} />
      <Card dataAnime={topAnime} />
      <Pagination number={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page} />
    </>
  );
}
