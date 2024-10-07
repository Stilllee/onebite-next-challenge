"use client";

import { useActionState, useEffect, useRef } from "react";

import { deleteReviewAction } from "@/actions/delete-review.action";

interface PropsType {
  reviewId: number;
  movieId: number;
}

export default function ReviewItemDeleteButton({
  reviewId,
  movieId,
}: PropsType) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null,
  );

  useEffect(() => {
    if (state && !state.status) alert(state.error);
  }, [state]);

  const handleClick = () => {
    if (!isPending) formRef.current?.requestSubmit();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  const deleteBtnStyle = `w-fit border-b border-transparent text-obGray transition-colors hover:border-obGray ${isPending && "cursor-not-allowed"}`;

  return (
    <form ref={formRef} action={formAction}>
      <input name="reviewId" value={reviewId} hidden readOnly />
      <input name="movieId" value={movieId} hidden readOnly />
      <div
        className={deleteBtnStyle}
        aria-label={isPending ? "리뷰 삭제중" : "이 리뷰 삭제하기"}
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-disabled={isPending}
      >
        <span aria-hidden>{isPending ? "삭제중..." : "삭제하기"}</span>
      </div>
    </form>
  );
}
