import Image from "next/image";
import Link from "next/link";
import { MovieData } from "@/types";

export default function MovieItem(props: MovieData) {
  return (
    <Link
      className="block overflow-hidden rounded-md"
      href={`/movie/${props.id}`}
      aria-label={`${props.title} 상세정보 보기`}
    >
      <figure className="relative h-0 w-full pb-[150%]">
        <Image
          src={props.posterImgUrl}
          alt={`${props.title} 포스터`}
          fill
          className="object-cover"
          sizes="(max-width: 600px) 100vw, (min-width: 601px) 50vw, (min-width: 1024px) 33vw"
        />
      </figure>
    </Link>
  );
}
