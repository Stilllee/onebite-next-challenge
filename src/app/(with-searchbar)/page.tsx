import MovieItem from "../components/MovieItem";
import movies from "@/mock/movies.json";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section>
        <h2 className="my-5 text-xl font-bold">지금 가장 추천하는 영화</h2>
        <ul className="grid grid-cols-3 gap-2">
          {movies.slice(0, 3).map((movie) => (
            <li key={`recomovie-${movie.id}`}>
              <MovieItem {...movie} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="my-5 text-xl font-bold">등록된 모든 영화</h2>
        <ul className="grid grid-cols-5 gap-x-2 gap-y-4">
          {movies.map((movie) => (
            <li key={`allmovie-${movie.id}`}>
              <MovieItem {...movie} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
