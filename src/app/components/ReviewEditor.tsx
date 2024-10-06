export async function ReviewEditor() {
  return (
    <form className="flex flex-col gap-3">
      <textarea
        className="min-h-28 w-full resize-y rounded-md border border-obGray bg-transparent p-3"
        name="content"
        placeholder="리뷰 내용"
        required
      />
      <div className="flex justify-end gap-3">
        <input
          className="rounded-md border border-obGray bg-transparent p-3"
          type="text"
          name="author"
          placeholder="작성자"
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
