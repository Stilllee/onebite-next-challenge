import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import MovieItem from "@/components/MovieItem";
import { ReactNode } from "react";
import SearchableLayout from "@/components/SearchableLayout";
import fetchMovies from "@/lib/fetchMovies";

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { q } = context.query;
  const searchMovies = await fetchMovies(q as string);

  return {
    props: {
      searchMovies,
    },
  };
};

export default function Page({
  searchMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
