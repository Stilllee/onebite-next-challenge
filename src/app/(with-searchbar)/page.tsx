import { MovieData } from "@/types";
import MovieItem from "../components/MovieItem";
import movies from "@/mock/movies.json";

async function AllMovies() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`);
  if (!res.ok) {
    return <p>오류가 발생했습니다.</p>;
  }
  const allMovies: MovieData[] = await res.json();

  return (
    <ul className="grid grid-cols-5 gap-x-2 gap-y-4">
      {allMovies.map((movie) => (
        <li key={`allmovie-${movie.id}`}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
}

async function RecoMovies() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
  );
  if (!res.ok) {
    return <p>오류가 발생했습니다.</p>;
  }
  const recoMovies: MovieData[] = await res.json();

  return (
    <ul className="grid grid-cols-3 gap-2">
      {recoMovies.slice(0, 3).map((movie) => (
        <li key={`recomovie-${movie.id}`}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section>
        <h2 className="my-5 text-xl font-bold">지금 가장 추천하는 영화</h2>
        <RecoMovies />
      </section>
      <section>
        <h2 className="my-5 text-xl font-bold">등록된 모든 영화</h2>
        <AllMovies />
      </section>
    </div>
  );
}
