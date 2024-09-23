import Link from "next/link";
import { MovieData } from "@/types";

export default function MovieItem(props: MovieData) {
  return (
    <Link
      className="block overflow-hidden rounded-md"
      href={`/movie/${props.id}`}
      aria-label={`${props.title} 상세정보 보기`}
    >
      <img src={props.posterImgUrl} alt={`${props.title} 포스터`} />
    </Link>
  );
}
