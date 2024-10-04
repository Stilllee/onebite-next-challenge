import { MovieData } from "@/types";
import MovieItem from "@/app/components/MovieItem";
import { Suspense } from "react";

async function SearchResult({ q }: { q: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
    {
      cache: "force-cache",
    },
  );
  if (!res.ok) {
    return <p>오류가 발생했습니다.</p>;
  }

  const searchMovies: MovieData[] = await res.json();

  return (
    <ul className="grid grid-cols-3 gap-x-2 gap-y-4">
      {searchMovies.map((movie) => (
        <li key={`searchmovie-${movie.id}`}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
}

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <>
      <h2 className="sr-only">영화 검색 결과</h2>
      <Suspense key={searchParams.q || ""} fallback={<p>로딩중...</p>}>
        <SearchResult q={searchParams.q || ""} />
      </Suspense>
    </>
  );
}
