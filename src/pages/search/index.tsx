import MovieItem from "@/components/MovieItem";
import { ReactNode } from "react";
import SearchableLayout from "@/components/SearchableLayout";
import movies from "@/mock/movies.json";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <h2 className="sr-only">영화 검색 결과</h2>
      <ul className="grid grid-cols-3 gap-x-2 gap-y-4">
        {movies.map((movie) => (
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
