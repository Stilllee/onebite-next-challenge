import { Metadata } from "next";
import { MovieData } from "@/types";
import MovieItem from "@/app/components/MovieItem";
import MovieListSkeleton from "@/app/components/skeleton/MovieListSkeleton";
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

type PropsType = {
  searchParams: {
    q?: string;
  };
};

export function generateMetadata({ searchParams }: PropsType): Metadata {
  return {
    title: `${searchParams.q} : 한입 시네마 검색`,
    description: `${searchParams.q}의 검색 결과입니다`,
    openGraph: {
      title: `${searchParams.q} : 한입 시네마 검색`,
      description: `${searchParams.q}의 검색 결과입니다`,
      images: ["/thumbnail.png"],
    },
  };
}

export default function Page({ searchParams }: PropsType) {
  return (
    <>
      <h2 className="sr-only">영화 검색 결과</h2>
      <Suspense
        key={searchParams.q || ""}
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
        <SearchResult q={searchParams.q || ""} />
      </Suspense>
    </>
  );
}
