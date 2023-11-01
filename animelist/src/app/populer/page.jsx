"use client";

import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";

export default function Populer() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}&limit=24`);
    const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <Banner title={`Top Anime #${page}`} />
      <Card dataAnime={topAnime} />
      <Pagination />
    </>
  );
}
