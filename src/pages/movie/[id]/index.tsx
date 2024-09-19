import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import Head from "next/head";
import { MovieData } from "@/types";
import fetchMovies from "@/lib/fetchMovies";
import fetchOneMovie from "@/lib/fetchOneMovie";

export const getStaticPaths = async () => {
  const movies = await fetchMovies();
  return {
    paths: movies.map((movie) => {
      return {
        params: {
          id: movie.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { id } = context.params!;
  const movie = await fetchOneMovie(Number(id));

  return {
    props: {
      movie: movie as MovieData,
    },
  };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={posterImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <article className="flex flex-col gap-5">
        <div
          className="relative flex justify-center rounded-md bg-cover bg-center bg-no-repeat p-5 before:absolute before:inset-0 before:bg-black before:bg-opacity-70 before:content-['']"
          style={{ backgroundImage: `url('${posterImgUrl}')` }}
          aria-hidden
        >
          <img
            className="relative z-10 h-full max-h-96 rounded-md"
            src={posterImgUrl}
            alt={`${title} 포스터`}
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="space-y-2 opacity-50">
          <p>
            <time aria-label="개봉일" dateTime={releaseDate}>
              {releaseDate}
            </time>{" "}
            / <span aria-label="장르">{genres.join(", ")}</span> /{" "}
            <span aria-label="상영 시간">{runtime}분</span>
          </p>
          <p aria-label="제작사">{company}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold">{subTitle}</h3>
          <p aria-label="영화 설명">{description}</p>
        </div>
      </article>
    </>
  );
}
