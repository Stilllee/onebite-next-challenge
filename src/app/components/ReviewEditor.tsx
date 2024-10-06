import { createRevieAction } from "@/actions/create-review.action";

export async function ReviewEditor({ movieId }: { movieId: string }) {
  return (
    <form
      className="flex flex-col gap-3"
      action={createRevieAction}
      aria-label="영화 리뷰 작성"
    >
      <textarea
        className="min-h-28 w-full resize-y rounded-md border border-obGray bg-transparent p-3"
        name="content"
        placeholder="리뷰 내용"
        aria-label="리뷰 내용"
        required
      />
      <div className="flex justify-end gap-3">
        <input name="movieId" value={movieId} hidden />
        <input
          className="rounded-md border border-obGray bg-transparent p-3"
          type="text"
          name="author"
          placeholder="작성자"
          aria-label="작성자"
          required
        />
        <button
          className="rounded-md bg-obDarkGray p-3 font-bold"
          type="submit"
        >
          작성하기
        </button>
      </div>
    </form>
  );
}
