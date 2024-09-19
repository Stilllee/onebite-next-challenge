import { ReactNode, useEffect, useState } from "react";

import Head from "next/head";
import { MovieData } from "@/types";
import MovieItem from "@/components/MovieItem";
import SearchableLayout from "@/components/SearchableLayout";
import fetchMovies from "@/lib/fetchMovies";
import { useRouter } from "next/router";

export default function Page() {
  const [searchMovies, setSearchMovies] = useState<MovieData[]>([]);

  const router = useRouter();
  const { q } = router.query;

  useEffect(() => {
    const fetchSearchResult = async () => {
      const data = await fetchMovies(q as string);
      setSearchMovies(data);
    };

    if (q) fetchSearchResult();
  }, [q]);

  return (
    <>
      <Head>
        <title>한입 시네마 | 검색 결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입 시네마 | 검색 결과" />
        <meta
          property="og:description"
          content="한입 시네마에 등록된 다양한 영화들을 만나보세요"
        />
      </Head>
      <h2 className="sr-only">영화 검색 결과</h2>
      <ul className="grid grid-cols-3 gap-x-2 gap-y-4">
        {searchMovies.map((movie) => (
          <li key={movie.id}>
            <MovieItem {...movie} />
          </li>
        ))}
      </ul>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
