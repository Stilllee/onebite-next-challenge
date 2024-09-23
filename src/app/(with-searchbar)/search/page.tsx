import MovieItem from "@/app/components/MovieItem";
import movies from "@/mock/movies.json";

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <>
      <h2 className="sr-only">영화 검색 결과</h2>
      <ul className="grid grid-cols-3 gap-x-2 gap-y-4">
        {movies.map((movie) => (
          <li key={`searchmovie-${movie.id}`}>
            <MovieItem {...movie} />
          </li>
        ))}
      </ul>
    </>
  );
}
