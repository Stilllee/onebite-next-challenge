import MovieItemSkeleton from "./MovieItemSkeleton";

export default function MovieListSkeleton({ count }: { count: number }) {
  return (
    <>
      <li className="sr-only">영화를 불러오는 중입니다.</li>
      {new Array(count).fill(0).map((_, idx) => (
        <MovieItemSkeleton key={`movie-item-skeleton-${idx}`} />
      ))}
    </>
  );
}
