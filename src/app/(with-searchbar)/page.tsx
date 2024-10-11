import { Metadata } from "next";
import { MovieData } from "@/types";
import MovieItem from "../components/MovieItem";
import MovieListSkeleton from "../components/skeleton/MovieListSkeleton";
import { Suspense } from "react";

async function AllMovies() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`, {
    cache: "force-cache",
  });
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
    {
      next: { revalidate: 3 },
    },
  );
  if (!res.ok) {
    return <p>오류가 발생했습니다.</p>;
  }
  const recoMovies: MovieData[] = await res.json();

  return (
    <ul className="grid grid-cols-3 gap-2">
      {recoMovies.map((movie) => (
        <li key={`recomovie-${movie.id}`}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "한입 시네마",
  description: "한입 시네마에 등록된 다양한 영화들을 만나보세요",
  openGraph: {
    title: "한입 시네마",
    description: "한입 시네마에 등록된 다양한 영화들을 만나보세요",
    images: ["/thumbnail.png"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section>
        <h2 className="my-5 text-xl font-bold">지금 가장 추천하는 영화</h2>

        <Suspense
          fallback={
            <ul
              className="grid grid-cols-3 gap-2"
              role="status"
              aria-live="polite"
            >
              <MovieListSkeleton count={3} />
            </ul>
          }
        >
          <RecoMovies />
        </Suspense>
      </section>
      <section>
        <h2 className="my-5 text-xl font-bold">등록된 모든 영화</h2>
        <Suspense
          fallback={
            <ul
              className="grid grid-cols-5 gap-x-2 gap-y-4"
              role="status"
              aria-live="polite"
            >
              <MovieListSkeleton count={15} />
            </ul>
          }
        >
          <AllMovies />
        </Suspense>
      </section>
    </div>
  );
}
