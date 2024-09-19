import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import MovieItem from "@/components/MovieItem";
import { ReactNode } from "react";
import SearchableLayout from "@/components/SearchableLayout";
import fetchMovies from "@/lib/fetchMovies";
import fetchRamdomMovies from "@/lib/fetchRandomMovies";

export const getStaticProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRamdomMovies(),
  ]);

  return {
    props: {
      allMovies,
      recoMovies,
    },
    revalidate: 3,
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입 시네마</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입 시네마" />
        <meta
          property="og:description"
          content="한입 시네마에 등록된 다양한 영화들을 만나보세요"
        />
      </Head>
      <div className="flex flex-col gap-12">
        <section>
          <h2 className="my-5 text-xl font-bold">지금 가장 추천하는 영화</h2>
          <ul className="grid grid-cols-3 gap-2">
            {recoMovies.map((movie) => (
              <li key={`recomovie-${movie.id}`}>
                <MovieItem {...movie} />
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="my-5 text-xl font-bold">등록된 모든 영화</h2>
          <ul className="grid grid-cols-5 gap-x-2 gap-y-4">
            {allMovies.map((movie) => (
              <li key={`allmovie-${movie.id}`}>
                <MovieItem {...movie} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
