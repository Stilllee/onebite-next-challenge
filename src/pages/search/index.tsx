import { ReactNode, useEffect, useState } from "react";

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
