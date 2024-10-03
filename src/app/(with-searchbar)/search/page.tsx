import { MovieData } from "@/types";
import MovieItem from "@/app/components/MovieItem";

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${searchParams.q}`,
  );
  if (!res.ok) {
    return <p>오류가 발생했습니다.</p>;
  }

  const searchMovies: MovieData[] = await res.json();

  return (
    <>
      <h2 className="sr-only">영화 검색 결과</h2>
      <ul className="grid grid-cols-3 gap-x-2 gap-y-4">
        {searchMovies.map((movie) => (
          <li key={`searchmovie-${movie.id}`}>
            <MovieItem {...movie} />
          </li>
        ))}
      </ul>
    </>
  );
}
