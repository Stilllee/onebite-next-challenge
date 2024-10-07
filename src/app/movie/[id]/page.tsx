import { MovieData, ReviewData } from "@/types";

import { ReviewEditor } from "@/app/components/ReviewEditor";
import ReviewItem from "@/app/components/ReviewItem";

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`);
  if (!res.ok) throw new Error("영화를 가져오지 못했습니다.");

  const movies: MovieData[] = await res.json();
  return movies.map((movie) => ({
    id: movie.id.toString(),
  }));
}

async function MovieDetail({ movieId }: { movieId: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`,
    { cache: "force-cache" },
  );
  if (!res.ok) {
    return <p>오류가 발생했습니다.</p>;
  }

  const {
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  }: MovieData = await res.json();
  return (
    <article className="flex flex-col gap-5">
      <div
        className="before:content-[' relative flex justify-center rounded-md bg-cover bg-center bg-no-repeat p-5 before:absolute before:inset-0 before:bg-black before:bg-opacity-70"
        style={{ backgroundImage: `url('${posterImgUrl})` }}
        aria-hidden
      >
        <img
          className="relative z-10 h-full max-h-96 rounded-md"
          src={posterImgUrl}
          alt={`${title} 포스터`}
        />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <h3 className="sr-only">영화 상세 정보</h3>
      <section className="space-y-2 opacity-50">
        <p>
          <span className="sr-only">개봉일: </span>
          <time dateTime={releaseDate}>{releaseDate}</time> /{" "}
          <span aria-label="장르">{genres.join(", ")}</span> /{" "}
          <span aria-label="상영 시간">{runtime}분</span>
        </p>
        <p aria-label="제작사">{company}</p>
      </section>
      <section className="space-y-2">
        <h4 className="text-lg font-bold">{subTitle}</h4>
        <p>{description}</p>
      </section>
    </article>
  );
}

async function ReviewList({ movieId }: { movieId: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/movie/${movieId}`,
    { next: { tags: [`review-${movieId}`] } },
  );

  if (!res.ok) {
    throw new Error(`리뷰를 가져오지 못했습니다.: ${res.statusText}`);
  }

  const reviews: ReviewData[] = await res.json();

  return (
    <section>
      <h3 className="sr-only">리뷰 목록</h3>
      <ul>
        {reviews.map((review) => (
          <ReviewItem key={`review-item-${review.id}`} {...review} />
        ))}
      </ul>
    </section>
  );
}

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-14">
      <MovieDetail movieId={params.id} />
      <ReviewEditor movieId={params.id} />
      <ReviewList movieId={params.id} />
    </div>
  );
}
