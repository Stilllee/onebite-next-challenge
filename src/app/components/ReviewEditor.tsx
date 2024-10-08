"use client";

import { useActionState, useEffect } from "react";

import { createRevieAction } from "@/actions/create-review.action";

export function ReviewEditor({ movieId }: { movieId: string }) {
  const [state, formAction, isPending] = useActionState(
    createRevieAction,
    null,
  );

  useEffect(() => {
    if (state && !state.status) alert(state.error);
  }, [state]);

  return (
    <form
      className="flex flex-col gap-3"
      action={formAction}
      aria-label="영화 리뷰 작성"
    >
      <label htmlFor="review-content" className="sr-only">
        리뷰 내용
      </label>
      <textarea
        className="min-h-28 w-full resize-y rounded-md border border-obGray bg-transparent p-3"
        id="review-content"
        name="content"
        placeholder="리뷰 내용"
        required
        disabled={isPending}
      />
      <div className="flex justify-end gap-3">
        <input name="movieId" value={movieId} hidden readOnly />
        <label htmlFor="author-name" className="sr-only">
          작성자
        </label>
        <input
          className="rounded-md border border-obGray bg-transparent p-3"
          id="author-name"
          type="text"
          name="author"
          placeholder="작성자"
          required
          disabled={isPending}
        />
        <button
          className="rounded-md bg-obDarkGray p-3 font-bold"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "작성중..." : "작성하기"}
        </button>
      </div>
    </form>
  );
}
