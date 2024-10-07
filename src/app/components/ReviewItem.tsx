import { ReviewData } from "@/types";
import ReviewItemDeleteButton from "./ReviewItemDeleteButton";

const formatDate = (dateString: string): string => {
  return dateString.split("T")[0].replace(/-/g, ".");
};

export default function ReviewItem({
  author,
  createdAt,
  content,
  id,
  movieId,
}: ReviewData) {
  return (
    <li className="mb-8 border-b-2 border-obDarkLine pb-8">
      <article className="flex flex-col gap-4">
        <div className="mb-3 flex items-end gap-3">
          <span className="text-lg font-bold" aria-label="리뷰 작성자">
            {author}
          </span>
          <div className="text-obGray">
            <span className="sr-only">작성일: </span>
            <time dateTime={createdAt}>{formatDate(createdAt)}</time>
          </div>
        </div>
        <p>{content}</p>
        <ReviewItemDeleteButton reviewId={id} movieId={movieId} />
      </article>
    </li>
  );
}
