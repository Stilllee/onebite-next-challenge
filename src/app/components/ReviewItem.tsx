import { ReviewData } from "@/types";

const formatDate = (dateString: string): string => {
  return dateString.split("T")[0].replace(/-/g, ".");
};

export default function ReviewItem({ author, createdAt, content }: ReviewData) {
  return (
    <li className="mb-8 flex flex-col gap-4 border-b-2 border-obDarkLine pb-8">
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
      <button
        className="w-fit border-obGray text-obGray hover:border-b"
        aria-label="이 리뷰 삭제하기"
      >
        삭제하기
      </button>
    </li>
  );
}
