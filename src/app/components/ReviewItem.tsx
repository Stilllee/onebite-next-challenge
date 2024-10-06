export default function ReviewItem() {
  return (
    <li className="mb-8 flex flex-col gap-4 border-b-2 border-obDarkLine pb-8">
      <div className="mb-3 flex items-end gap-3">
        <span className="text-lg font-bold" aria-label="리뷰 작성자">
          작성자
        </span>
        <div className="text-obGray">
          <time dateTime="2024-10-6" aria-label="작성일: 2024년 10월 6일">
            2024.10.6
          </time>
        </div>
      </div>
      <p>리뷰</p>
      <button
        className="w-fit border-obGray text-obGray hover:border-b"
        aria-label="이 리뷰 삭제하기"
      >
        삭제하기
      </button>
    </li>
  );
}
